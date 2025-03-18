import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">About Me</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              As a motivated and detail-oriented junior software engineering student, I have gained hands-on experience through two impactful internships during my freshman and sophomore years. These opportunities have allowed me to develop a strong foundation in web development, cybersecurity, and software engineering.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              During my freshman year, I interned at Wimbee, where I contributed to the development of a website application. I worked on the front-end using Angular and collaborated on the back-end using Spring Boot (Java). Additionally, I gained experience in API testing, ensuring seamless integration and functionality. This project helped me build a solid understanding of full-stack development and problem-solving in a real-world environment.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              In my sophomore year, I interned at Preventis, focusing on penetration testing and website security. I conducted vulnerability assessments, analyzed security performance, and identified SEO-related issues to enhance the company's web presence. This experience deepened my knowledge of cybersecurity principles and tools, as well as the importance of maintaining robust and secure systems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Beyond my internships, I am actively engaged in personal and academic projects that further hone my technical skills. I am passionate about continuous learning and applying my knowledge to solve complex problems. As I progress in my academic journey, I am eager to explore new challenges and contribute to innovative solutions in the tech industry.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Let's connect and discuss how we can collaborate on exciting opportunities!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;