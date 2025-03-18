 
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-20 max-w-4xl mx-auto px-4"
    >
      <h2 className="section-heading">{title}</h2>
      {children}
    </motion.section>
  );
};

const projects = [
  {
    title: 'Elegance Boutique',
    description: 'A sophisticated e-commerce platform for a boutique fashion store, featuring a modern shopping experience.',
    github: 'https://github.com/ananyaxgupta/Elegance_Boutique',
  },
  {
    title: 'Clothing Website',
    description: 'A responsive clothing retail website with an intuitive user interface and seamless shopping experience.',
    github: 'https://github.com/ananyaxgupta/Clothing-Website',
  },
  {
    title: 'Clarify',
    description: 'An innovative web application focused on providing clear and concise information delivery.',
    github: 'https://github.com/ananyaxgupta/clarify',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, interactive portfolio website built with React and Framer Motion animations.',
    github: 'https://github.com/ananyaxgupta/portfolio',
  },
];

function App() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-[var(--navy)]/90 backdrop-blur-sm z-50 py-4">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Code2 className="h-8 w-8 text-[var(--green)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-6"
          >
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="h-screen flex items-center justify-center px-4"
      >
        <div className="text-center">
          <h1 className="text-[var(--green)] text-xl mb-4">Hi, my name is</h1>
          <h2 className="text-5xl md:text-7xl font-bold text-[var(--lightest-slate)] mb-4">Ananya Gupta</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-[var(--slate)] mb-8">I build things for the web.</h3>
          <p className="max-w-xl mx-auto text-lg mb-8">
            I'm a software engineer specializing in building exceptional digital experiences.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block border-2 border-[var(--green)] text-[var(--green)] px-8 py-4 rounded hover:bg-[var(--green)]/10 transition-colors duration-300"
          >
            Get In Touch
          </motion.a>
        </div>
      </motion.div>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Hello! I'm a passionate software developer with a keen interest in creating beautiful and functional web applications. I enjoy solving complex problems and learning new technologies.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1531811682571-fceb15034971?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="rounded-lg w-full max-w-sm mx-auto"
            />
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-[var(--lightest-slate)] mb-2">{project.title}</h3>
              <p className="mb-4 text-[var(--light-slate)]">{project.description}</p>
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--green)] hover:text-[var(--lightest-slate)]"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['JavaScript', 'TypeScript', 'React', 'Node.js', 'HTML5', 'CSS3', 'Git', 'AWS'].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="card text-center"
            >
              <p className="text-[var(--lightest-slate)]">{skill}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch">
        <div className="text-center max-w-xl mx-auto">
          <p className="mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="mailto:ananyax2004@gmail.com"
              whileHover={{ y: -2 }}
              className="text-[var(--green)] hover:text-[var(--lightest-slate)]"
            >
              <Mail className="h-8 w-8" />
            </motion.a>
            <motion.a
              href="https://github.com/ananyaxgupta"
              whileHover={{ y: -2 }}
              className="text-[var(--green)] hover:text-[var(--lightest-slate)]"
            >
              <Github className="h-8 w-8" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ananyagupta"
              whileHover={{ y: -2 }}
              className="text-[var(--green)] hover:text-[var(--lightest-slate)]"
            >
              <Linkedin className="h-8 w-8" />
            </motion.a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-6 text-center text-[var(--slate)]">
        <p>Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;