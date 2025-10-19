import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export function ContactPage() {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "PHONE",
      details: ["BANGLORE : 9751697857 ", "KRISHNAGIRI : 9944399170"],
    },
    {
      icon: EnvelopeIcon,
      title: "EMAIL",
      details: ["info@bpconstruction.com", "projects@bpconstruction.com"],
    },
    {
      icon: MapPinIcon,
      title: "ADDRESS",
      details: [
        " BANGLORE ",
        "55,Hari Priyalayout, Singena agrahara, Banglore-560099",

        " KRISHNAGIRI ",
        "Krishnagiri(DT) Uthangarai-635207",
      ],
    },
    // {
    //   icon: ClockIcon,
    //   title: 'Business Hours',
    //   details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM']
    // }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-medium mb-6">
              Get in touch with our team today!
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let’s start building your future together. contact our team for
              your free consultation now.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Have questions? Send us a quick note.
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="FIRST NAME" className="block mb-2">
                          FIRST NAME *
                        </label>
                        <input
                          type="text"
                          id="FIRST NAME"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block mb-2">
                          LAST NAME *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block mb-2">
                          EMAIL *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block mb-2">
                          PHONE NUMBER *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block mb-2">
                        PROJECT TYPE
                      </label>
                      <select
                        id="projectType"
                        className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a project type</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Renovation">Renovation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="DESCRIPTION" className="block mb-2">
                        DESCRIPTION *
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <info.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIdx) => (
                          <p
                            key={detailIdx}
                            className="text-sm text-muted-foreground"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-medium mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground">
              Stop by our office to discuss your project in person
            </p>
          </div>
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-300">
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325319.3924181957!2d77.46578777185286!3d12.953945401286763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1760866597606!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
