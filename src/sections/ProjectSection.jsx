import ProjectCard from "../UI/ProjectCard";

function ProjectSection() {
  return (
    <div>
      <section className="px-8 py-12 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <ProjectCard
            title="Eventify"
            url="https://eventifydemo.netlify.app"
            tech="React, Redux, Firebase, CI/CD"
            desc="Ticket booking platform with Firebase backend and live deployment."
          />
          <ProjectCard
            title="Fast React Pizza"
            url="https://ars-fast-react-pizza.netlify.app"
            tech="React, Redux Toolkit, Tailwind"
            desc="Pizza ordering app simulating real-world delivery workflow."
          />
          <ProjectCard
            title="Movie Search App"
            url="https://ars-usepopcorn.netlify.app"
            tech="React, OMDB API"
            desc="Search and rate movies with persistent local storage."
          />
          <ProjectCard
            title="ISA Management System"
            url="https://github.com/AnshRiteshSavadatti/Team6-WebTech-SE-ISA"
            tech="React, Express, MySQL"
            desc="Full-stack tool for exam seat allocation and paper tracking."
          />
        </div>
      </section>
    </div>
  );
}

export default ProjectSection;
