import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './VanteRibbonHero.css';

const WORK = [
  ['Roadster 3D', 'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/designs/roadster-3d-car-landing.mp4'],
  ['Living Portrait', 'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/aaaf/living-portrait-hero.mp4'],
  ['Particle Self', 'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/aaaf/oraciteslArea.mp4'],
  ['Robot Jellyfish', 'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/aaaf/medusa-jellyfish-hero.mp4'],
  ['Ink Reveal', 'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/designs/ink-reveal-hover.mp4'],
  ['Space Voyage', 'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/designs/space-voyage-video.mp4'],
  ['Helion Dispatch', 'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/designs/helion-dispatch-landing.mp4'],
  ['Honey Bee', 'https://pub-86dc5b5484314368ac5436a674b0d919.r2.dev/designs/honey-bee-melli-landing.mp4'],
] as const;

const clamp = (x: number, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => t * t * (3 - 2 * t);
const out = (t: number) => 1 - (1 - t) ** 3;
const span = (p: number, a: number, b: number) => clamp((p - a) / (b - a));

const CARD_W = 2.1;
const CARD_H = 1.32;
const GAP = 0.03;
const STEP = CARD_W + GAP;
const NX = 28;
const NY = 3;
const SAMPLES = 1200;
const PH0 = -1.5;
const PH1 = Math.PI * 2 + 1.35;
const GRID_Z = 8;
const RIBBON_START = 0.14;
const RIBBON_END = 0.63;

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
`;

const fragmentShader = `
  uniform sampler2D map;
  uniform vec2 cover;
  uniform float aspect, ready, radius;
  varying vec2 vUv;
  void main() {
    vec2 q = (abs(vUv - .5) - .5) * vec2(aspect, 1.) + radius;
    float d = length(max(q, 0.)) + min(max(q.x, q.y), 0.) - radius;
    float px = fwidth(d), a = 1. - smoothstep(-px, px, d);
    if (a < .01) discard;
    vec2 uv = vUv;
    if (!gl_FrontFacing) uv.x = 1. - uv.x;
    vec3 c = mix(vec3(.075), texture2D(map, (uv - .5) * cover + .5).rgb, ready);
    float edge = smoothstep(-.012 - px, -.012, d);
    gl_FragColor = vec4(mix(c, vec3(1.), edge * .1), a);
  }
`;

interface RibbonCard {
  index: number;
  title: string;
  video: HTMLVideoElement;
  texture: THREE.VideoTexture;
  geometry: THREE.PlaneGeometry;
  material: THREE.ShaderMaterial;
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>;
  onLoadedData: () => void;
  playPending: boolean;
  rect: GridRect | null;
}

interface GridRect {
  x: number;
  y: number;
  w: number;
  h: number;
  vw: number;
  vh: number;
  col: number;
  row: number;
}

export const VanteRibbonHero: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const firstLineRef = useRef<HTMLDivElement>(null);
  const secondLineRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLAnchorElement>(null);
  const pagerRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const crossRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const [webglError, setWebglError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!canvas || !track || !stage) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch (error) {
      console.error('Unable to initialize the ALOKA ribbon experience.', error);
      setWebglError(true);
      return;
    }

    renderer.setClearColor(0, 0);
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    const pathPoints: THREE.Vector3[] = [];
    const pathTangents: THREE.Vector3[] = [];
    const cards: RibbonCard[] = [];
    let path: THREE.CatmullRomCurve3;
    let pathLength = 1;
    let width = 1;
    let height = 1;
    let aspect = 1;
    let cols = 3;
    let rows = 2;
    let tanH = 0.3153;
    let targetProgress = 0;
    let progress = 0;
    let frameId = 0;
    let isVisible = true;
    let destroyed = false;

    const position = new THREE.Vector3();
    const tangent = new THREE.Vector3();
    const up = new THREE.Vector3();
    const worldUp = new THREE.Vector3(0, 1, 0);
    const vertex = new THREE.Vector3();

    const buildPath = () => {
      const points: THREE.Vector3[] = [];
      for (let i = 0; i <= 160; i += 1) {
        const t = i / 160;
        const phase = mix(PH0, PH1, t);
        const cosine = Math.cos(phase);
        const u = 2 * t - 1;
        const depth = cosine > 0
          ? 7.6 + 16.4 * cosine ** 0.9
          : 7.6 + 2.2 * cosine;
        const edge = 0.84 + 0.5 * span(0.14 - t, 0, 0.14) + 0.8 * span(t, 0.84, 1);
        points.push(new THREE.Vector3(
          edge * Math.sin(phase) * depth * 0.561,
          0.5 * Math.sign(u) * Math.abs(u) ** 1.4 * depth * 0.63,
          -depth,
        ));
      }

      path = new THREE.CatmullRomCurve3(points, false, 'centripetal');
      path.arcLengthDivisions = 1500;
      pathLength = path.getLength();
      pathPoints.length = 0;
      pathTangents.length = 0;
      for (let i = 0; i <= SAMPLES; i += 1) {
        const t = i / SAMPLES;
        pathPoints.push(path.getPointAt(t));
        pathTangents.push(path.getTangentAt(t));
      }
    };

    const pointAt = (distance: number, outPosition: THREE.Vector3, outTangent: THREE.Vector3) => {
      const sample = clamp(distance / pathLength) * SAMPLES;
      const index = Math.min(SAMPLES - 1, Math.floor(sample));
      const fraction = sample - index;
      outPosition.lerpVectors(pathPoints[index], pathPoints[index + 1], fraction);
      outTangent.lerpVectors(pathTangents[index], pathTangents[index + 1], fraction).normalize();
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      aspect = width / height;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height, false);
      camera.aspect = aspect;
      camera.fov = aspect < 16 / 9
        ? Math.atan(0.561 / aspect) * 360 / Math.PI
        : 35;
      camera.updateProjectionMatrix();
      tanH = Math.tan(camera.fov * Math.PI / 360);
      cols = aspect < 0.9 ? 2 : 3;
      rows = aspect < 0.9 ? 3 : 2;
    };

    const gridRect = (index: number): GridRect => {
      const viewH = 2 * GRID_Z * tanH;
      const viewW = viewH * aspect;
      const gridW = viewW * (cols === 3 ? 0.74 : 0.88);
      const gap = gridW * 0.017;
      const cardW = (gridW - gap * (cols - 1)) / cols;
      const cardH = cardW / (CARD_W / CARD_H);
      const col = index % cols;
      const row = Math.floor(index / cols);
      const gridH = cardH * rows + gap * 1.6 * (rows - 1);
      return {
        x: -gridW / 2 + cardW / 2 + col * (cardW + gap),
        y: gridH / 2 - cardH / 2 - row * (cardH + gap * 1.6),
        w: cardW,
        h: cardH,
        vw: viewW,
        vh: viewH,
        col,
        row,
      };
    };

    const poseRibbon = (card: RibbonCard, head: number) => {
      const attribute = card.geometry.attributes.position;
      const center = head - card.index * STEP;
      for (let iy = 0; iy <= NY; iy += 1) {
        for (let ix = 0; ix <= NX; ix += 1) {
          const vertexIndex = iy * (NX + 1) + ix;
          const localU = ix / NX - 0.5;
          const localV = 0.5 - iy / NY;
          pointAt(center + localU * CARD_W, position, tangent);
          up.copy(worldUp).addScaledVector(tangent, -worldUp.dot(tangent)).normalize();
          vertex.copy(position).addScaledVector(up, localV * CARD_H);
          attribute.setXYZ(vertexIndex, vertex.x, vertex.y, vertex.z);
        }
      }
      attribute.needsUpdate = true;
    };

    const poseGrid = (card: RibbonCard, q: number) => {
      const rect = gridRect(card.index);
      const attribute = card.geometry.attributes.position;
      const offsetX = (rect.col - (cols - 1) / 2) * 1.2;
      const directionY = rect.row < rows / 2 ? 1 : -1;
      const offsetY = directionY * (rect.col === 1 ? 0.95 : 0.34);
      const x = offsetX * rect.vw * 0.62 * (1 - q);
      const y = offsetY * rect.vh * (1 - q);
      const tilt = (1 - q) * 0.22 * (rect.col - 1 || 0.5) * directionY;
      const cosine = Math.cos(tilt);
      const sine = Math.sin(tilt);

      for (let iy = 0; iy <= NY; iy += 1) {
        for (let ix = 0; ix <= NX; ix += 1) {
          const vertexIndex = iy * (NX + 1) + ix;
          const localX = (ix / NX - 0.5) * rect.w;
          const localY = (0.5 - iy / NY) * rect.h;
          attribute.setXYZ(
            vertexIndex,
            rect.x + x + localX * cosine - localY * sine,
            rect.y + y + localX * sine + localY * cosine,
            -GRID_Z - (1 - q) * 0.6 * Math.sin(ix / NX * Math.PI),
          );
        }
      }

      attribute.needsUpdate = true;
      card.rect = rect;
    };

    WORK.forEach(([title, src], index) => {
      const video = document.createElement('video');
      Object.assign(video, {
        crossOrigin: 'anonymous',
        muted: true,
        loop: true,
        playsInline: true,
        preload: 'auto',
        src,
      });
      video.setAttribute('playsinline', '');

      const texture = new THREE.VideoTexture(video);
      texture.colorSpace = THREE.NoColorSpace;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
      const geometry = new THREE.PlaneGeometry(1, 1, NX, NY);
      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        transparent: true,
        side: THREE.DoubleSide,
        uniforms: {
          map: { value: texture },
          cover: { value: new THREE.Vector2(1, 1) },
          aspect: { value: CARD_W / CARD_H },
          ready: { value: 0 },
          radius: { value: 0.018 },
        },
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.frustumCulled = false;
      scene.add(mesh);

      const updateCover = () => {
        if (!video.videoWidth || !video.videoHeight) return;
        const videoAspect = video.videoWidth / video.videoHeight;
        const cardAspect = CARD_W / CARD_H;
        material.uniforms.cover.value.set(
          videoAspect > cardAspect ? cardAspect / videoAspect : 1,
          videoAspect > cardAspect ? 1 : videoAspect / cardAspect,
        );
        material.uniforms.ready.value = 1;
      };
      video.addEventListener('loadeddata', updateCover);
      cards.push({
        index,
        title,
        video,
        texture,
        geometry,
        material,
        mesh,
        onLoadedData: updateCover,
        playPending: false,
        rect: null,
      });
    });

    buildPath();
    resize();

    const updateScroll = () => {
      const trackTop = track.getBoundingClientRect().top + window.scrollY;
      const scrollable = track.offsetHeight - window.innerHeight;
      targetProgress = clamp((window.scrollY - trackTop) / scrollable);
    };

    const render = () => {
      const rise = 1 - out(span(progress, 0, 0.12));
      const run = mix(-50, 76, span(progress, 0, 0.58));
      if (firstLineRef.current) firstLineRef.current.style.transform = `translate3d(${run}vw,${rise * 34}vh,0)`;
      if (secondLineRef.current) secondLineRef.current.style.transform = `translate3d(${-run}vw,${rise * 34}vh,0)`;

      const caption = captionRef.current;
      if (caption) {
        caption.style.opacity = String(1 - span(progress, 0.52, 0.57));
        caption.style.transform = `translate(-50%,calc(-50% + ${rise * 34}vh))`;
      }

      const brand = brandRef.current;
      if (brand) {
        const lift = ease(span(progress, 0.01, 0.16));
        brand.style.transform = `translate(-50%,calc(-50% - ${lift * 48}vh)) scale(${1 - lift * 0.4})`;
        brand.style.opacity = String(1 - span(progress, 0.14, 0.22));
      }

      const introOpacity = String(1 - span(progress, 0, 0.05));
      [hintRef.current, pagerRef.current, crossRef.current, glowRef.current].forEach((element) => {
        if (element) element.style.opacity = introOpacity;
      });
      if (scrollCueRef.current) {
        const cueProgress = span(progress, 0, 0.06);
        scrollCueRef.current.style.opacity = String(1 - cueProgress);
        scrollCueRef.current.style.transform = `translate(-50%,${cueProgress * 10}px)`;
      }

      if (ruleRef.current) {
        ruleRef.current.style.transform = `scaleX(${ease(span(progress, 0.72, 0.86))})`;
      }

      const ribbonProgress = span(progress, RIBBON_START, RIBBON_END);
      const head = mix(0, pathLength + cards.length * STEP, ribbonProgress);
      for (const card of cards) {
        const distance = head - card.index * STEP;
        const end = pathLength - CARD_W;
        if (distance < end) {
          card.mesh.visible = distance > CARD_W;
          card.rect = null;
          if (card.mesh.visible) poseRibbon(card, head);
        } else if (card.index < cols * rows) {
          const start = mix(
            RIBBON_START,
            RIBBON_END,
            (end + card.index * STEP) / (pathLength + cards.length * STEP),
          );
          const q = out(span(progress, start, start + 0.13));
          card.mesh.visible = q > 0.001;
          if (card.mesh.visible) poseGrid(card, q);
        } else {
          card.mesh.visible = false;
          card.rect = null;
        }
      }
      renderer.render(scene, camera);
    };

    const loop = () => {
      if (destroyed) return;
      if (isVisible) {
        progress += (targetProgress - progress) * 0.09;
        if (Math.abs(targetProgress - progress) < 0.00005) progress = targetProgress;
        for (const card of cards) {
          if (card.mesh.visible && card.video.paused && !card.playPending) {
            card.playPending = true;
            void card.video.play()
              .catch((error: unknown) => {
                if (error instanceof DOMException && error.name === 'AbortError') return;
                console.warn(`Unable to play ribbon video "${card.title}".`, error);
              })
              .finally(() => {
                card.playPending = false;
              });
          } else if (!card.mesh.visible && (!card.video.paused || card.playPending)) {
            card.video.pause();
          }
        }
        render();
      }
      frameId = window.requestAnimationFrame(loop);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const label = nameRef.current;
      if (!label) return;
      let hovered: RibbonCard | null = null;
      if (progress > 0.86) {
        const normalizedX = event.clientX / width - 0.5;
        const normalizedY = 0.5 - event.clientY / height;
        for (const card of cards) {
          const rect = card.rect;
          if (!rect) continue;
          const x = normalizedX * rect.vw;
          const y = normalizedY * rect.vh;
          if (Math.abs(x - rect.x) < rect.w / 2 && Math.abs(y - rect.y) < rect.h / 2) {
            hovered = card;
          }
        }
      }
      label.style.opacity = hovered ? '1' : '0';
      if (hovered) {
        label.textContent = hovered.title;
        label.style.transform = `translate(${event.clientX + 14}px,${event.clientY + 16}px)`;
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) updateScroll();
    });
    observer.observe(track);
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', updateScroll, { passive: true });
    stage.addEventListener('pointermove', handlePointerMove);
    updateScroll();
    frameId = window.requestAnimationFrame(loop);

    return () => {
      destroyed = true;
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', updateScroll);
      stage.removeEventListener('pointermove', handlePointerMove);
      cards.forEach((card) => {
        card.video.pause();
        card.video.removeEventListener('loadeddata', card.onLoadedData);
        card.video.removeAttribute('src');
        card.video.load();
        card.texture.dispose();
        card.geometry.dispose();
        card.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  const scrollByViewport = (direction: -1 | 1) => {
    window.scrollBy({ top: direction * window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="vante-track" id="home" ref={trackRef}>
      <section className="vante-stage" id="stage" ref={stageRef} aria-label="ALOKA portfolio introduction">
        <canvas ref={canvasRef} className="vante-canvas" aria-hidden="true" />
        <div className="vante-brand-landing" ref={brandRef} aria-hidden="true">
          <div className="vante-brand-drop">
            <svg viewBox="0 0 22 18">
              <path d="M11 0l11 18h-6.2L11 9.6 6.2 18H0z" />
            </svg>
            <span>ALOKA</span>
          </div>
        </div>
        <h1 className="vante-headline" aria-label="We turn ideas into light">
          <div className="vante-line" id="l1" ref={firstLineRef} aria-hidden="true">
            <span>WE TURN</span>
          </div>
          <div className="vante-line" id="l2" ref={secondLineRef} aria-hidden="true">
            <span>IDEAS INTO LIGHT</span>
          </div>
        </h1>
        <div className="vante-caption" id="cap" ref={captionRef}>
          At ALOKA, we bring ideas to life through technology, creativity and intelligent digital experiences.
        </div>
        <div className="vante-glow" id="glow" ref={glowRef} />
        <div className="vante-cross" id="cross" ref={crossRef}>
          <i>+</i>
        </div>
        <div className="vante-rule" id="rule" ref={ruleRef} />
        <a className="vante-hint" id="hint" ref={hintRef} href="#contact">
          <span className="vante-hint-dot" aria-hidden="true" />
          <span>LET&apos;S START A PROJECT</span>
          <span className="vante-hint-arrow" aria-hidden="true">→</span>
        </a>
        <header className="vante-top">
          <a className="vante-logo" href="#home" aria-label="ALOKA home">
            <svg viewBox="0 0 22 18" aria-hidden="true">
              <path d="M11 0l11 18h-6.2L11 9.6 6.2 18H0z" />
            </svg>
            ALOKA
          </a>
          <div className="vante-pager" id="pager" ref={pagerRef} aria-label="Scroll controls">
            <button type="button" title="Previous screen" aria-label="Scroll to the previous screen" onClick={() => scrollByViewport(-1)}>↑</button>
            <button type="button" title="Next screen" aria-label="Scroll to the next screen" onClick={() => scrollByViewport(1)}>↓</button>
          </div>
          <nav className="vante-actions" aria-label="Main navigation">
            <a href="#contact"><i />LET&apos;S TALK</a>
            <a href="#services">MENU<b /></a>
          </nav>
        </header>
        <footer className="vante-bottom">
          <p>At ALOKA, we build meaningful solutions that move businesses forward.</p>
          <div className="vante-bottom-mid">
            CAPABILITIES<s>/</s>ABOUT<s>/</s>WORK<s>/</s>INSIGHTS
          </div>
          <a className="vante-showreel" href="#services">EXPLORE WHAT WE DO</a>
        </footer>
        <div className="vante-scroll-cue" ref={scrollCueRef} aria-label="Scroll to explore">
          <span>SCROLL TO EXPLORE</span>
          <span className="vante-scroll-track" aria-hidden="true"><i /></span>
        </div>
        {webglError && (
          <p className="vante-webgl-error" role="status">
            The interactive showreel is unavailable in this browser. You can still explore all ALOKA sections below.
          </p>
        )}
        <div className="vante-name" id="name" ref={nameRef} aria-hidden="true" />
      </section>
    </div>
  );
};

export default VanteRibbonHero;
