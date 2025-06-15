import MapContainer from '../components/GoogleMap/GoogleMap'; // Adjust the import path as necessary
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import MyDetails from '../constants/MyDetails';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [key, setKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setKey(prev => prev + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_r4q1g09',
        'template_8psw4sr',
        form.current,
        't25200J5dki7aW0hD'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus({
            success: true,
            message: 'Message sent successfully! I will contact you soon.'
          });
          if (form.current) form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus({
            success: false,
            message: 'Failed to send message. Please try again later.'
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <div className="min-h-screen bg-base-200">
      <div className="hero py-20">
        <div className="hero-content text-center w-full">
          <div className="w-full max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-primary">Contact Me</h1>
            <p className="mt-4 mb-8">Reach out to {MyDetails.name} for collaborations or inquiries!</p>
            <div className="card bg-base-100 shadow-xl">
              {submitStatus && (
                <div
                  className={`p-4 mx-10 mt-6 rounded ${submitStatus.success
                      ? 'bg-success/20 text-success'
                      : 'bg-error/20 text-error'
                    }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <form ref={form} onSubmit={sendEmail} className="card bg-base-100 p-10 shadow-md max-w-3xl mx-auto space-y-6 w-full">
                <div className="form-control items-center">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your name"
                    className="input input-bordered input-primary w-full text-center"
                    required
                  />
                </div>
                <div className="form-control items-center">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="your.email@example.com"
                    className="input input-bordered input-primary w-full text-center"
                    required
                  />
                </div>
                <div className="form-control items-center">
                  <input
                    type="tel"
                    name="user_phone"  // This must match the variable name in EmailJS
                    placeholder="Your phone (optional)"
                    className="input input-bordered input-primary w-full text-center"
                  />
                </div>
                <div className="form-control items-center">
                  <textarea
                    name="message"
                    className="textarea textarea-bordered textarea-primary h-28 resize-none w-full text-center"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <div className="form-control items-center">
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Find Me</h2>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <MapContainer key={key} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;