function ContactSection() {
  return (
    <div>
      <section className="px-8 py-12 bg-gray-100 dark:bg-gray-700">
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
        <p>
          Email:{" "}
          <a
            className="text-blue-600 dark:text-blue-300"
            href="mailto:anshsavadatti@gmail.com"
          >
            anshsavadatti@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            className="text-blue-600 dark:text-blue-300"
            href="https://github.com/AnshRiteshSavadatti"
          >
            AnshRiteshSavadatti
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            className="text-blue-600 dark:text-blue-300"
            href="https://linkedin.com/in/anshsavadatti2004"
          >
            anshsavadatti2004
          </a>
        </p>
      </section>
    </div>
  );
}

export default ContactSection;
