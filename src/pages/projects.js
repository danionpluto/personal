import React, { useState } from "react";
import censored_books from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/censored_books.png";
import social_dynamis from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/confirmation_bias.jpg";
import flair from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/FLAIR.JPG";
import swapp from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/swapp-fyp.png";
import butt from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/green_arrow.png";
import { motion, AnimatePresence } from "framer-motion";


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState("censoredBooks");

  const projectData = {
    censoredBooks: {
      title: "Censored Books\n",
      image: censored_books,
      blurb: "Using Boolean search, Cosine similarity, and SVD, our team created an information retrieval system to combat the growing censorship about various topics, many of which affect marginalized communities to a greater degree. Many of those who are affected by the censorship tend to be students who are eager to access books through public libraries that will educate them about the world around them, as well as give them access to communities that can provide life-saving support systems. When searching up discourse-ridden queries, it is helpful to know which books have been restricted or taken off shelves in order to amplify them and preserve the knowledge and stories that lie within their covers. At the same time, we want to make the history of where and when books about race, LGBTQ+ rights, and feminism have been banned accessible through an information retrieval system."
    },
    socialDynamis: {
      title: "Social Dynamics\n",
      image: social_dynamis,
      blurb: "My work as part of this research lab involved writing scripts and running experiments to test whether models like chat-gpt and llama-3 exhibit confirmation bias. While plenty of other bias has been detected in LLMs, exploring confirmation bias was an issue we deemed urgent as models are being interwoven into social media sites and potenitally exasterbating echo-chambers and radicalization."
    },
    flair: {
      title: "FLAIR\n",
      image: flair,
      blurb: "I spent the summer of 2024 working alongside a brilliant and innovative team of Computer Scientists, mathematicians, and linguists to reimagine approaches to Automatic Speech recognition for Indigenous Languages of the Pacific Northwest. We spent the summer searching through existing literature and participating in code reviews to think of new ways to tackle the small amount of data available for endangered languages."
    },
    swapp: {
      title: "Swapp\n",
      image: swapp,
      blurb: "Swapp is a peer-to-peer marketplace for exchanging secondhand goods. The platform is designed to facilitate sustainable consumption by allowing users to swap items they no longer need with others in our Cornell Community. As part of the umbrella Project Team CUSD, I served as the development and team lead of the project and lead the migration over to a website format to make the site more accessible to other students. Although I primarily served as development lead,  worked to facillitate the work of 3 subteams: development, UI/UX, and Marketing to truly synthesize our application as a marketplace application product. \n Our team worked to integrate a Firebase database into a React Native powered IOS app and a React website."
    }
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };
  const handleNextProject = () => {
    const keys = Object.keys(projectData);
    const currentIndex = keys.indexOf(selectedProject);
    const nextIndex = (currentIndex + 1) % keys.length; 
    setSelectedProject(keys[nextIndex]);
  };

  return (
    <div className="projpage">
      {/* <h1>Projects</h1> */}

      <div className="subnav">
        <button
          className={`nav-btn ${selectedProject === "censoredBooks" ? "active" : ""}`}
          onClick={() => handleProjectSelect("censoredBooks")}
        >
          Censored Books
        </button>
        <button
          className={`nav-btn ${selectedProject === "socialDynamis" ? "active" : ""}`}
          onClick={() => handleProjectSelect("socialDynamis")}
        >
          Social Dynamics
        </button>
        <button
          className={`nav-btn ${selectedProject === "flair" ? "active" : ""}`}
          onClick={() => handleProjectSelect("flair")}
        >
          FLAIR
        </button>
        <button
          className={`nav-btn ${selectedProject === "swapp" ? "active" : ""}`}
          onClick={() => handleProjectSelect("swapp")}
        >
          Swapp
        </button>
      </div>

      <div className="proj">
        <div className="projects">
          <div className="subproj">
            {/* <img className="proj_pics" src={projectData[selectedProject].image} alt="Project image" height={300} />
            <div className="blurb">
              <div className="blurb-proj">
                {projectData[selectedProject].blurb}
              </div>
            </div> */}

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="presentation"
              >

<img className="proj_pics" src={projectData[selectedProject].image} alt="Project image" height={300} />
            <div className="blurb">
              <div className="blurb-proj">
              <a className="project_links" >
              {projectData[selectedProject].title}
              </a>
              <br />
              <br />
                {projectData[selectedProject].blurb}
              </div>
            </div>

            </motion.div>
            </AnimatePresence>


          </div>


          <button className="triangle-clip" onClick={handleNextProject}>
      
          </button>
          
        </div>
      
          
      </div>
    </div>
  );
};

export default Projects;
