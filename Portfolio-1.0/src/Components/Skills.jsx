import React from 'react';
import rails from '../assets/images/rails.svg';
import PostgreSQL from '../assets/images/PostgreSQL.svg';

const Skills = () => {
  const skills = [
    {
      logo: 'logo-html5',
      name: 'HTML',
    },
    {
      logo: 'logo-css3',
      name: 'CSS',
    },
    {
      logo: 'logo-nodejs',
      name: 'Node JS',
    },
    {
      logo: 'logo-react',
      name: 'React',
    },
    {
      logo: 'logo-javascript',
      name: 'JS',
    },
    {
      logo: 'git-branch-sharp',
      name: 'Git',
    },
    {
      logo: PostgreSQL,
      name: 'Postgres',
    },
    {
      logo: rails,
      name: 'Rails',
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My
          {' '}
          <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Skilled in creating secure, scalable web applications with responsive design and optimal user experiences.</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {skills?.map((skill) => (
            <div
              key={skill.logo}
              className="border-2 cursor-pointer group border-cyan-600 relative ml-10 mr-10 min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl transform transition duration-500 hover:scale-110"

            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center">
                  <ion-icon name={skill.logo} src={skill.logo} />
                </div>
              </div>
              <p className="text-xl mt-5">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
