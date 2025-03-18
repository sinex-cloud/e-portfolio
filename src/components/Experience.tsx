import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin, BriefcaseIcon } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Preventis',
      position: 'Penetration Testing Intern',
      duration: 'Sophomore Year',
      description: "Focused on penetration testing and website security. Conducted vulnerability assessments, analyzed security performance, and identified SEO-related issues to enhance the company's web presence.",
      linkedinUrl: 'https://linkedin.com/in/ahmedbrini',
      githubUrl: 'https://github.com/sinex-cloud'
    },
    {
      company: 'Wimbee',
      position: 'Full Stack Developer Intern',
      duration: 'Freshman Year',
      description: 'Contributed to website application development using Angular (front-end) and Spring Boot (back-end). Gained experience in API testing and full-stack development.',
      linkedinUrl: 'https://linkedin.com/in/ahmedbrini',
      githubUrl: 'https://github.com/sinex-cloud'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Internship Experience</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-primary-200 dark:bg-primary-800 transform -translate-x-1/2" />
            
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-1/2 z-10">
                  <div className="absolute w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white dark:bg-dark-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <BriefcaseIcon className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {experience.position}
                      </h3>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {experience.company} • {experience.duration}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {experience.description}
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href={experience.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={experience.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <GitHub className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;