import { SectionWrapper } from "../hoc";
import { github, linkedin, instagram, facebook } from "../assets";

const Contact = () => {
  return (
    <div className="bg-tertiary p-16 rounded-lg text-center">
      <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
      <div className="flex justify-center mb-8">
        <a
          href="https://www.linkedin.com/in/amani-sedrat-59781926b"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <img
            src={linkedin} // Replace with your LinkedIn logo image URL
            alt="LinkedIn"
            className="h-10 w-10 cursor-pointer transition duration-300 transform hover:scale-110 filter-white"
          />
        </a>
        <a
          href="https://github.com/Amani-Sedrat"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          <img
            src={github} // Replace with your GitHub logo image URL
            alt="GitHub"
            className="h-10 w-10 cursor-pointer transition duration-300 transform hover:scale-110"
          />
        </a>
        <a
          href="https://www.instagram.com/amani._sed"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-4"
        >
          <img
            src={instagram} // Replace with your Instagram logo image URL
            alt="Instagram"
            className="h-10 w-10 cursor-pointer transition duration-300 transform hover:scale-110 filter-white"
          />
        </a>
        <a
          href="https://www.facebook.com/mi.rak.37051"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4"
        >
          <img
            src={facebook} // Replace with your Facebook logo image URL
            alt="Facebook"
            className="h-10 w-10 cursor-pointer transition duration-300 transform hover:scale-110 filter-white"
          />
        </a>
      </div>
      <p className="text-white text-sm">Contact me at: a_sedrat@estin.dz</p>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
