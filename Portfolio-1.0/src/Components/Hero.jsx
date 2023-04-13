import React from 'react';
import hero from '../assets/images/hero.webp';

const Hero = () => {
  const socialMedia = [
    {
      name: 'Github',
      icon: 'logo-github',
      link: 'https://github.com/Miliyonayalew/',
    },
    {
      name: 'Linkedin',
      icon: 'logo-linkedin',
      link: 'https://www.linkedin.com/in/miliyon-ayalew/',
    },
    {
      name: 'Twitter',
      icon: 'logo-twitter',
      link: 'https://twitter.com/MilaAyalew',
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="hero" className="md:w-10/11 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I&apos;m
            {' '}
            <span>Miliyon Ayalew</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <p className="md:text-xl text-lg md:leading-normal leading-5 mt-4 text-gray-400">
            See my work and skills - I can help you build your dream product, feature or website.
          </p>
          <a href="#contact">
            <button type="button" className="btn-primary mt-8">Contact Me</button>
          </a>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {socialMedia?.map((icon) => (
              <div
                key={icon.name}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={icon.link} alt={icon.name} target="_blank" rel="noreferrer">
                  <ion-icon name={icon.icon} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
