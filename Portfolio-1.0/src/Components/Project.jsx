import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import project1 from '../assets/images/project-1.webp';
import project2 from '../assets/images/project-2.webp';
import project3 from '../assets/images/project-3.webp';
import project4 from '../assets/images/project-4.webp';
import project5 from '../assets/images/project-5.webp';
import 'swiper/css';
import 'swiper/css/pagination';

const Project = () => {
  const projects = [
    {
      img: project1,
      name: 'Marriott Reservation',
      github_link: 'https://github.com/Miliyonayalew/Marriott-Reservation-Backend',
      live_link: 'https://marriott-reservation.netlify.app/',
      tech_stack: '#React  #PostgreSQL  #ROR',
      description: 'Built a hotel reservation web app with React/Redux frontend and Ruby on Rails backend API.',
    },
    {
      img: project3,
      name: "Space Traveler's Hub",
      github_link: 'https://github.com/Miliyonayalew/space-travelers-hub',
      live_link: 'https://rad-cat-cbc90c.netlify.app/',
      tech_stack: '#React #Redux #CSS',
      description: 'Web application for space travel company using SpaceX API for booking rockets and missions.',
    },
    {
      img: project2,
      name: 'Crypto-App',
      github_link: 'https://github.com/Miliyonayalew/crypto-app',
      live_link: 'https://poetic-lokum-2abf1e.netlify.app/',
      tech_stack: '#React #Redux #Jest',
      description: 'Track top 100 crypto values and prices through a web app for the cryptocurrency market.',
    },
    {
      img: project4,
      name: 'Tv Show',
      github_link: 'https://github.com/Miliyonayalew/Capstone-II',
      live_link: 'https://jfoyarzo.github.io/Capstone-II/',
      tech_stack: '#HTML #CSS #JavaScript',
      description: 'The app showcases TV show info, and ratings/comments, with show card details and comment functionality. ',
    },
    {
      img: project5,
      name: 'Todo App',
      github_link: 'https://github.com/Miliyonayalew/react-todo',
      live_link: 'https://miliyonayalew.github.io/react-todo/',
      tech_stack: '#React #CSS #Jest',
      description: 'React to-do app enables the addition/deletion of tasks and filtering by completion status.',
    },
  ];

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My
          {' '}
          <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Here is some of my work.</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6  px-5 mx-auto items-center relative flex-wrap">
        <div className="lg:w-4/4 w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
            }}
            loop
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((projectInfo) => (
              <SwiperSlide key={projectInfo.img}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={projectInfo.img} alt="" className="rounded-lg h-48 w-full " />
                  <h3 className="text-xl my-4">{projectInfo.name}</h3>
                  <p className="text-gray-400 mb-4 ">{projectInfo.description}</p>
                  <div className="flex gap-3 mb-4">
                    <span title="Tech Stack" className=" hover:text-cyan-600 text-white font-bold py-1 px-2 text-xs rounded cursor-pointer mr-1">
                      {projectInfo.tech_stack}
                    </span>
                  </div>
                  <div className="flex gap-3 mb-4">
                    <a
                      href={projectInfo.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href={projectInfo.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Project;
