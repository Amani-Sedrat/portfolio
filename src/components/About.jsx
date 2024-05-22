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
     
      I'm a computer engineering student (specializing in AI and Data Science) who loves diving into the digital world. I'm pretty handy at creating websites and apps that are easy for people to use. Plus, I'm really into AI and data science, where I love digging into datasets and uncovering insights.



      </p>

     
      
    </>
  );
};

export default SectionWrapper(About, "about");
