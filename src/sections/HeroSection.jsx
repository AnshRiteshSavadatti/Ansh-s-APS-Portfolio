import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function HeroSection() {
  return (
    <div>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ansh R. Savadatti
        </motion.h1>
        <motion.p
          className="text-xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Creating impactful solutions at the intersection of AI, Web, and
          Society.
        </motion.p>
        <motion.p
          className="text-sm text-gray-500 dark:text-gray-400 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Instructor: <strong>Prakash Hegade (PH)</strong>
        </motion.p>

        <div className="flex gap-6 mt-6">
          <a
            href="https://github.com/AnshRiteshSavadatti"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/anshsavadatti2004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:anshsavadatti@gmail.com">
            <FaEnvelope size={30} />
          </a>
        </div>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1CKUk4Cda1Yv1RtUBKOcd8rSVrghiArZz/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-stone-500 transition duration-300"
        >
          📄 View Resume
        </a>
      </section>
    </div>
  );
}

export default HeroSection;
