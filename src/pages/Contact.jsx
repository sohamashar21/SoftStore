import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="animate-fade-in">
      <section
        className="py-16 sm:py-24"
        style={{ background: "var(--bg-card)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p style={{ color: "var(--text-secondary)" }}>
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    marginBottom: "2rem",
                  }}
                >
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    info: "+919377367897",
                    desc: "Mon-Fri from 9am to 6pm",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    info: "hellosoftstore.com",
                    desc: "We'll respond ASAP",
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    info: "Jg university",
                    desc: "Ahemdabad, India",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-xl"
                    style={{
                      background: "var(--bg-card)",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--bg-secondary)" }}
                    >
                      <item.icon size={24} style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.info}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-elevated p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ background: "var(--accent)", color: "white" }}
                  >
                    <MessageSquare size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-soft mt-6"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="John Doe"
                      className="input-soft"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className="input-soft"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Your message..."
                      rows={4}
                      className="input-soft resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary-soft w-full inline-flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        className="h-64 sm:h-96"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} style={{ color: "var(--text-muted)" }} />
            <p className="mt-2" style={{ color: "var(--text-muted)" }}>
              Ahemdabad , India
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
