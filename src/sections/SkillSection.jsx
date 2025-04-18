function SkillSection() {
  return (
    <div>
      <section className="px-8 py-12">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4 px-4">
          {[
            "C/C++",
            "Python",
            "JavaScript",
            "ReactJS",
            "NodeJS",
            "ExpressJS",
            "MySQL",
            "MongoDB",
            "Docker",
            "TailwindCSS",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-white px-4 py-1 rounded-full text-sm font-medium "
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SkillSection;
