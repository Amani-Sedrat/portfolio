import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";



const About = () => {
  return (
    <>
      <div>
    
        <h2 className={styles.sectionHeadText}>About me</h2>
      </div>

      <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
     
I'm a computer engineering student passionate about creating digital solutions. Skilled in web and mobile development, I love building user-friendly applications. I also have a keen interest in AI and data science, where I enjoy exploring algorithms and finding patterns in data. I'm excited to continue learning and using technology to solve real-world problems.
      </p>

     
      
    </>
  );
};

export default SectionWrapper(About, "about");
