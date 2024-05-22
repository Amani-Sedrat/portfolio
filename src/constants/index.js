import {
   
    javascript,
    flutter,
    html,
    css,
    mysql,
    reactjs,
    python,
    tailwind,
    nodejs,
    mongodb,
    git,
    powerbi,
    eviews,
    wepictit,
    car,
    chatbot,
    llm,
    portf,
    studies,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "toolset",
      title: "Toolset",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  
  ];
  
  
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "flutter",
      icon: flutter,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "eviews",
      icon: eviews,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "powerbi",
      icon: powerbi,
    },
  
  ];
 
  
  const projects = [
    {
      name: "Car Troubleshooter",
      description:
        "an expert system that helps users diagnose and troubleshoot car problems based on the symptoms they provide.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
      
      ],
      image: car,
      source_code_link: "https://github.com/Amani-Sedrat/CarTroubleshooter",
    },

    {
      name: "WePicIT",
      description:
        "pictures recommendation system that recommends pictures based on user preferences and interactions.",
      tags: [
        {
          name: "HTML 5",
          color: "blue-text-gradient",
        },
        {
          name: "neo4j",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: wepictit,
      source_code_link: "https://github.com/Yusuf-Belkhiri/We-Pic-It",
    },

    {
      name: "Portfolio Website",
      description:
        "My portfolio website built with React JS, Tailwind CSS, and Framer Motion.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: portf,
      source_code_link: "https://github.com/Amani-Sedrat/portfolio",
    },
     
   
    {
      name: "Q&A LLM",
      description:
        "an LLM with RAG architecture to answer different questions from any given pdf",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
       
        {
          name: "chromadb",
          color: "pink-text-gradient",
        },
        {
          name: "ollama",
          color: "green-text-gradient",
        },
        
      ],
      image: llm,
      source_code_link: "https://github.com/Amani-Sedrat/LLmExercise",
    },
    
    {
      name: "chatgpt clone",
      description:
        " chatgpt clone is a chatbot that uses the GPT-3 model to generate human-like responses to user messages.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
       
      ],
      image: chatbot,
      source_code_link: "https://github.com/Amani-Sedrat/IntegrationGpt",
    },

    
    {
      name: "Studies Guide",
      description:
        "A website that helps students to find teachers and courses that match their needs and preferences.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "flask",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: studies,
      source_code_link: "https://github.com/Amani-Sedrat/ProjetGl",
    },
  
  ];
  
  export { technologies,  projects };