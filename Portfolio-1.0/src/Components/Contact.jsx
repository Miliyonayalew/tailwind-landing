import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xqkjaerj');

  const handleContactUs = () => {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  if (state.succeeded) {
    handleContactUs();
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-semibold text-center">
          Thank you for contacting me!
        </h1>
        <p className="text-lg text-gray-400 text-center">
          I will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  const contactInfo = [
    {
      logo: 'mail', text: 'Email', link: 'miliayalew@gmail.com', name: 'miliayalew@gmail.com',
    },
    {
      logo: 'call-outline', text: 'Call', link: '+251922765739', name: '+251922765739',
    },
    {
      logo: 'logo-linkedin', text: 'Linkedin', link: 'https://www.linkedin.com/in/miliyon-ayalew/', name: 'Miliyon Ayalew',
    },
    {
      logo: 'logo-github', text: 'Github', link: 'https://github.com/Miliyonayalew/', name: 'Miliyonayalew',
    },

    {
      logo: 'location',
      text: 'Address',
      link: 'https://goo.gl/maps/6JwawLq4XWaJXY4K9',
      name: 'Harar, Ethiopia',
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact
          {' '}
          <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              id="name"
              required
              placeholder="Your Name"
            />
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Your Email Address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              rows={10}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button className="btn-primary w-fit" type="submit">Send Message</button>
          </form>
          <div className="flex flex-col gap-7">
            {contactInfo.map((contact) => {
              let link;
              if (contact.logo === 'mail') {
                link = `mailto:${contact.link}`;
              } else if (contact.logo === 'call-outline') {
                link = `tel:${contact.link}`;
              } else {
                link = contact.link;
              }

              return (
                <div key={contact.logo} className="flex flex-row text-left gap-4 flex-wrap items-center">
                  <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                    <a href={link} target="_blank" rel="noreferrer">
                      <ion-icon name={contact.logo} />
                    </a>
                  </div>
                  <p className="md:text-base text-sm break-words">
                    {contact.text}
                    <br />
                    <a href={link} target="_blank" className="text-cyan-600" rel="noreferrer">
                      {contact.name}
                    </a>
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
