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
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
              I am a software engineering student passionate about technology and problem-solving. Currently, I am expanding my skills in blockchain and mobile development, aiming to build innovative and efficient solutions. With prior experience in web development and penetration testing through internships, I am eager to apply my knowledge in real-world projects. I am actively seeking a summer internship or a remote part-time role where I can contribute, learn, and grow within the tech industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
