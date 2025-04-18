function ProjectCard({ title, url, tech, desc }) {
  return (
    <a
      href={url}
      target="_blank"
      className="border border-gray-300 dark:border-gray-600 p-4 rounded-xl hover:shadow-md bg-white dark:bg-gray-800 ml-6"
    >
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{tech}</p>
      <p className="text-sm">{desc}</p>
    </a>
  );
}
export default ProjectCard;
