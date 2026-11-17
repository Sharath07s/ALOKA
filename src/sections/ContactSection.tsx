import React, { useState } from 'react';
import SectionReveal from '../components/SectionReveal';
import StarParticle from '../components/StarParticle';
import { Send, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'demo-sent'>('idle');

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please add a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please share a brief message (minimum 10 characters).';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      // Simulate client-side validation demonstration
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmissionStatus('demo-sent');
      }, 700);
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-12 z-10 overflow-hidden">
      {/* Background radial celestial source */}
      <div
        className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full pointer-events-none opacity-25 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.45) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 75%)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          {/* Left Column: CTA Pitch & Contact Info */}
          <div className="lg:col-span-5">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-6">
                <StarParticle size="sm" isHovered={true} glowColor="#a855f7" />
                <span className="text-xs font-mono tracking-widest text-purple-300 uppercase">
                  START A CONVERSATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-tight mb-6">
                Have an idea? Let's bring it <span className="font-display italic font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-white to-purple-400">to light</span>.
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-10">
                Every meaningful creation begins with a spark. Tell us what you're thinking, and let's explore what's possible together.
              </p>

              {/* Direct Info Pills */}
              <div className="space-y-4 pt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-4 text-sm text-zinc-300">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">EMAIL US</div>
                    <a
                      href="mailto:hello@aloka.digital"
                      className="font-medium text-white hover:text-purple-300 transition-colors"
                    >
                      hello@aloka.digital
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-zinc-300">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">HEADQUARTERS</div>
                    <span className="text-white">Global Remote Studio</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-zinc-300">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">RESPONSE TIME</div>
                    <span className="text-white">Within 24 Hours</span>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <SectionReveal delay={200}>
              <div className="contact-form-shell relative rounded-3xl p-8 sm:p-10 bg-[#0d0d12]/80 border border-white/[0.1] backdrop-blur-2xl shadow-2xl">
                {/* Visual Radiant Accent in top-right corner of card */}
                <div className="absolute top-6 right-6">
                  <StarParticle size="md" isHovered={true} glowColor="rgba(168, 85, 247, 0.7)" />
                </div>

                {submissionStatus === 'demo-sent' ? (
                  <div className="py-12 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-purple-500/20 border border-purple-400 flex items-center justify-center mb-6 shadow-[0_0_24px_rgba(168,85,247,0.5)]">
                      <CheckCircle2 className="w-8 h-8 text-purple-300" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      Your Message is Ready
                    </h3>
                    <p className="text-sm text-zinc-300 max-w-md font-light leading-relaxed mb-6">
                      Thank you, <strong className="text-white">{formData.name}</strong>! Form validated successfully. To send directly via your local email client:
                    </p>
                    <a
                      href={`mailto:hello@aloka.digital?subject=${encodeURIComponent(
                        formData.subject || 'Inquiry from ALOKA Website'
                      )}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                      )}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-white hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open Mail Client</span>
                    </a>
                    <button
                      onClick={() => setSubmissionStatus('idle')}
                      className="mt-6 text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-4 transition-colors"
                    >
                      Edit details or send another note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2"
                        >
                          Your Name <span className="text-purple-400">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Elena Rostova"
                          className={`contact-field w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-white text-sm border focus:outline-none transition-all placeholder:text-zinc-600 ${
                            formErrors.name
                              ? 'border-red-500/60 focus:border-red-500'
                              : 'border-white/[0.08] focus:border-purple-500/60 focus:bg-white/[0.05]'
                          }`}
                        />
                        {formErrors.name && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{formErrors.name}</span>
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2"
                        >
                          Email Address <span className="text-purple-400">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="elena@example.com"
                          className={`contact-field w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-white text-sm border focus:outline-none transition-all placeholder:text-zinc-600 ${
                            formErrors.email
                              ? 'border-red-500/60 focus:border-red-500'
                              : 'border-white/[0.08] focus:border-purple-500/60 focus:bg-white/[0.05]'
                          }`}
                        />
                        {formErrors.email && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{formErrors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2"
                      >
                        Subject <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Brand New Digital Product & Architecture"
                        className={`contact-field w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-white text-sm border focus:outline-none transition-all placeholder:text-zinc-600 ${
                          formErrors.subject
                            ? 'border-red-500/60 focus:border-red-500'
                            : 'border-white/[0.08] focus:border-purple-500/60 focus:bg-white/[0.05]'
                        }`}
                      />
                      {formErrors.subject && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{formErrors.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2"
                      >
                        Message <span className="text-purple-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project vision, timeline, and goals..."
                        className={`contact-field w-full px-4 py-3.5 rounded-xl bg-white/[0.03] text-white text-sm border focus:outline-none transition-all placeholder:text-zinc-600 resize-none ${
                          formErrors.message
                            ? 'border-red-500/60 focus:border-red-500'
                            : 'border-white/[0.08] focus:border-purple-500/60 focus:bg-white/[0.05]'
                        }`}
                      />
                      {formErrors.message && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{formErrors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="contact-submit w-full relative group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] disabled:opacity-50"
                    >
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      <span>{isSubmitting ? 'Validating...' : 'Send Message'}</span>
                    </button>
                  </form>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
