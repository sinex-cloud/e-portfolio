import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, Linkedin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'EcoRide',
      description: 'EcoRide is a smart electric scooter rental platform that allows users to locate, rent, and ride e-scooters seamlessly. With an interactive map displaying available scooters and built-in GPS navigation, users can easily find the nearest scooter and plan their route efficiently. EcoRide promotes eco-friendly urban mobility. 🚲⚡',
      image: 'https://png.pngtree.com/background/20241008/original/pngtree-sleek-eco-friendly-electric-kick-scooter-in-a-futuristic-blue-cityscape-picture-image_10803928.jpg',
      githubUrl: 'https://github.com/sinex-cloud'
    },
    {
      title: 'Treasure Hunter',
      description: 'Treasure Hunter is a 2D action-adventure game built with C and SDL2. In the game, players explore different environments, battling mobs and bosses while managing their health represented by hearts.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
      githubUrl: 'https://github.com/sinex-cloud'
    },
    {
      title: 'Preventis Security',
      description: 'Focused on penetration testing and website security. Conducted vulnerability assessments, analyzed security performance, and identified SEO-related issues to enhance the company\'s web presence.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80',
      githubUrl: 'https://github.com/sinex-cloud',
      linkedinUrl: 'https://linkedin.com/in/ahmedbrini'
    },
    {
      title: 'Wimbee Web App',
      description: 'Contributed to website application development using Angular (front-end) and Spring Boot (back-end). Gained experience in API testing and full-stack development.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
      githubUrl: 'https://github.com/sinex-cloud',
      linkedinUrl: 'https://linkedin.com/in/ahmedbrini'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative overflow-hidden rounded-xl bg-white dark:bg-dark-100 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <GitHub className="w-5 h-5" />
                    </a>
                    {project.linkedinUrl && (
                      <a
                        href={project.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
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

export default Projects;