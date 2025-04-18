function Experience() {
  return (
    <div>
      <section className="px-8 py-12">
        <h2 className="text-3xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4 lg:flex lg:items-center lg:justify-around">
          <div>
            <h3 className="text-xl font-bold">Mini Project Intern - NVIDIA</h3>
            <p className="text-sm text-gray-400">Oct 2024 – Jan 2025</p>
            <ul className="list-disc ml-6">
              <li>
                Multimodal transformer for image difference using BDD100K + ViT
              </li>
              <li>Custom dataset with Mini-InternVL-Chat-2B-V1-5</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Minor Project Intern - NVIDIA</h3>
            <p className="text-sm text-gray-400">Jan 2025 – Present</p>
            <ul className="list-disc ml-6">
              <li>Custom demosaicing pipeline for RCCB sensor</li>
              <li>YOLOX traffic light detection on Bosch dataset</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
