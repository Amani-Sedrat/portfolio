import { SectionWrapper } from "../hoc";
import { github, linkedin, instagram, discord } from "../assets";

const Contact = () => {
  return (
    <div className="bg-tertiary p-16 rounded-lg text-center">
      <h2 className="text-3xl font-bold text-white mb-8">connect with me </h2>
      <div className="flex justify-center mb-8">
        <a
          href="https://www.linkedin.com/in/amani-sedrat-59781926b"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <img
            src={linkedin} 
            alt="LinkedIn"
            className="h-8 w-8 cursor-pointer transition duration-300 transform hover:scale-110 filter-white"
          />
        </a>
        <a
          href="https://github.com/Amani-Sedrat"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          <img
            src={github} 
            alt="GitHub"
            className="h-8 w-8 cursor-pointer transition duration-300 transform hover:scale-110"
          />
        </a>
        <a
          href="https://www.instagram.com/amani._sed"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          <img
            src={instagram} 
            alt="Instagram"
            className="h-8 w-8 cursor-pointer transition duration-300 transform hover:scale-110 filter-white"
          />
        </a>
        <a
          href="https://discord.com/invite/EaDTR9gw"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4"
        >
          <img
            src={discord} 
            alt="Facebook"
            className="h-8 w-8 cursor-pointer transition duration-300 transform hover:scale-110 filter-white"
          />
        </a>
      </div>
      <a href="mailto:a_sedrat@estin.dz" className="text-white text-sm">or contact me at: a_sedrat@estin.dz</a>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
