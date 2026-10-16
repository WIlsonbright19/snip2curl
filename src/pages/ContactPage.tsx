import React, { useState } from 'react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    service: 'Dry Curly Haircut',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      surname: '',
      email: '',
      phone: '',
      service: 'Dry Curly Haircut',
      message: '',
    });
    setStatus('idle');
  };

  return (
    <div className="section_contact min-h-screen flex flex-col justify-between pt-24 pb-16 bg-[#efe5d7] text-[#171411]">
      <div className="padding-global">
        <div className="container-large max-w-4xl mx-auto">
          <div className="contact-component">
            <div className="contact_header text-center mb-8 md:mb-12">
              <div className="text-xs uppercase tracking-widest text-[#7b5d42] font-semibold mb-2">
                San Francisco Salon &amp; Studio
              </div>
              <h1 className="heading-style-h1 is-contact font-zodiak text-3xl sm:text-5xl md:text-6xl font-normal text-[#171411]">
                Get in Touch
              </h1>
              <p className="text-[#171411]/80 text-sm sm:text-base md:text-lg max-w-lg mx-auto mt-2 sm:mt-3 font-cabinet leading-relaxed">
                We invite you to reach out for appointments, curl consultations, or custom texture inquiries at our Polk Street studio.
              </p>
              <div className="text-[11px] sm:text-xs uppercase font-mono tracking-widest text-[#7b5d42] mt-2 sm:mt-3">
                1419 Polk St, San Francisco · (415) 292-5788 · Mon–Sun 10am–7pm
              </div>
              <div className="mt-4 flex items-center justify-center">
                <a
                  href="tel:+14152925788"
                  aria-label="Call Snip 2 Curl"
                  className="button is-nav font-bold bg-[#efe5d7] hover:bg-white text-[#171411] border border-[#171411]/25 inline-flex items-center gap-2 cursor-pointer shadow-md"
                  title="Call Snip 2 Curl"
                >
                  <div className="button-text">
                    <div className="button_text">Call Us</div>
                    <div className="button-text-animation">
                      <div className="button_text">Call Us</div>
                    </div>
                  </div>
                  <svg className="button-image is-nav w-3.5 h-3.5 text-[#171411] fill-[#171411] shrink-0" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.27.36-.66.25-1.02-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Elevated, Taller Form Container */}
            <div className="contact_form w-full max-w-2xl mx-auto">
              <div className="form-block bg-[#e8ddcc]/60 border border-[#171411]/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-14 shadow-xl">
                {status === 'success' ? (
                  <div className="success-message w-form-done block bg-[#e8ddcc] p-6 sm:p-10 md:p-14 rounded-2xl text-center border border-[#171411]/10 shadow-sm animate-fadeIn">
                    <img
                      src="/images/curl-mark-dark.svg"
                      alt="Snip 2 Curl mark"
                      className="w-12 h-12 mx-auto mb-4"
                    />
                    <h3 className="font-zodiak text-3xl md:text-4xl font-normal text-[#171411] mb-2">
                      Thank You!
                    </h3>
                    <div className="text-base md:text-lg text-[#171411]/80 mb-8 max-w-md mx-auto">
                      Your message has been received! Sunny and our team at 1419 Polk St will reach out shortly.
                    </div>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="button inline-flex mx-auto px-8 py-3.5"
                    >
                      <div className="button-text">
                        <div className="button_text">Send Another Inquiry</div>
                      </div>
                    </button>
                  </div>
                ) : (
                  <form id="email-form" name="email-form" onSubmit={handleSubmit} className="form flex flex-col gap-6 md:gap-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                      <div className="flex flex-col gap-1 sm:gap-1.5">
                        <label htmlFor="name" className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-[#171411]/70 font-semibold">
                          First Name *
                        </label>
                        <input
                          className="w-full bg-[#efe5d7] border-2 border-[#171411]/15 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#171411] transition-all"
                          autoFocus
                          maxLength={256}
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your First Name"
                          type="text"
                          id="name"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1 sm:gap-1.5">
                        <label htmlFor="surname" className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-[#171411]/70 font-semibold">
                          Last Name
                        </label>
                        <input
                          className="w-full bg-[#efe5d7] border-2 border-[#171411]/15 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#171411] transition-all"
                          maxLength={256}
                          name="surname"
                          value={formData.surname}
                          onChange={handleChange}
                          placeholder="Your Last Name"
                          type="text"
                          id="surname"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                      <div className="flex flex-col gap-1 sm:gap-1.5">
                        <label htmlFor="email" className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-[#171411]/70 font-semibold">
                          Email Address *
                        </label>
                        <input
                          className="w-full bg-[#efe5d7] border-2 border-[#171411]/15 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#171411] transition-all"
                          maxLength={256}
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jordan@example.com"
                          type="email"
                          id="email"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1 sm:gap-1.5">
                        <label htmlFor="phone" className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-[#171411]/70 font-semibold">
                          Phone Number (SMS Confirmation) *
                        </label>
                        <input
                          className="w-full bg-[#efe5d7] border-2 border-[#171411]/15 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#171411] transition-all"
                          maxLength={256}
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(415) 292-5788"
                          type="tel"
                          id="phone"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 sm:gap-1.5">
                      <label htmlFor="service" className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-[#171411]/70 font-semibold">
                        Service You Want
                      </label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-[#efe5d7] border-2 border-[#171411]/15 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#171411] transition-all cursor-pointer"
                      >
                        <option>Dry Curly Haircut</option>
                        <option>Soft Wave Perm</option>
                        <option>Japanese Straightening</option>
                        <option>Highlights &amp; Balayage</option>
                        <option>Deep Scalp &amp; Moisture Treatment</option>
                        <option>Haircut Fix / Consultation</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1 sm:gap-1.5">
                      <label htmlFor="message" className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-[#171411]/70 font-semibold">
                        Tell Us About Your Hair (Optional)
                      </label>
                      <textarea
                        placeholder="Tell us about your curls, what you need help with, or any questions you have..."
                        maxLength={5000}
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[#efe5d7] border-2 border-[#171411]/15 rounded-lg sm:rounded-xl p-3.5 sm:p-5 text-sm sm:text-base md:text-lg focus:outline-none focus:border-[#171411] transition-all min-h-[120px] sm:min-h-[160px]"
                        rows={5}
                      />
                    </div>

                    <div className="button-form flex flex-col items-center justify-center mt-3">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="button w-full sm:w-auto px-12 py-4 border-none cursor-pointer text-base md:text-lg"
                      >
                        <div className="button-text">
                          <div className="button_text">
                            {status === 'submitting' ? 'Submitting...' : 'Send Inquiry'}
                          </div>
                          <div className="button-text-animation">
                            <div className="button_text">
                              {status === 'submitting' ? 'Submitting...' : 'Send Inquiry'}
                            </div>
                          </div>
                        </div>
                        <img
                          src="/images/curl-mark-light.svg"
                          loading="lazy"
                          alt="Snip 2 Curl mark"
                          className="button-image w-4 h-4 ml-2"
                        />
                      </button>
                    </div>

                    {status === 'error' && (
                      <div className="error-message w-form-fail block text-red-800 text-sm bg-red-100/70 p-4 rounded-xl text-center mt-2 font-mono">
                        <div>Oops! Please fill in all required fields and try again.</div>
                      </div>
                    )}
                  </form>
                )}
              </div>
            </div>

            {/* Back to Home Button */}
            <div className="mt-12 text-center pb-4">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/');
                }}
                className="inline-flex items-center gap-2 text-sm text-[#171411]/70 hover:text-[#171411] transition-colors font-mono"
              >
                <span>←</span>
                <span>Return to Home</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
