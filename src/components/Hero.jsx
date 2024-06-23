import { motion } from "framer-motion";

import { styles } from "../styles";
import StarsCanvas from "./canvas/Computers";
import AnyaCanvas from "./canvas/anya";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
      
        <div  style={{ padding: "50px" }} >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#dca7f9]'>Amani</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software Developer <br className='sm:block hidden' />
            & Data Science enthusiast
          </p>
        </div>
      </div>

       <StarsCanvas />
       <AnyaCanvas />
    </section>
  );
};

export default Hero;