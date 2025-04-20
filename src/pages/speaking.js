import React, { useState } from "react";
import censored_books from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/censored_books.png";
import social_dynamis from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/me_beach.jpg";
import flair from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/rising.jpg";
import swapp from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/back.jpg";
import neurips from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/neurips.png";
import aiisp from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/indigenouscomputingconference_01_04282023.jpg";

import apizaco from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/46a2b6be-1a6e-41d2-aeba-66ad7a315cb5.JPG";

 

const Speaking = () => {
  const [selectedProject, setSelectedProject] = useState("neurips");

  // Define the blurb text and image based on the selected project
  const projectData = {
    neurips: {
      title: "NeurIPS",
      image: neurips,
      blurb: "At the NeurIPS 2025 conference, I had the honor of presenting about the state of Indigenous Language AI, particularly along the dimmension of automatic speech recognition and data sovereignty. I presented along with Ryan Conti and Belu Ticona with the support of Michael Runningwolf, Caroline Runningwolf, Shawn Tsosie, and the rest of the Indigigenius team. ",
      link: "https://neurips.cc/virtual/2024/affinity-event/105016"
    },
    ai_symp: {
      title: "Indigenous AI Symposium",
      image: aiisp,
      blurb: "At this symposium co-hsted by the Redistributive Computing Group and the American Indian and Indigenous sudies program at Cornell, I presented my work regarding how Natural Language Processing and Technology overall can and has been applied to Indigenous languages. I covered the long discussed idea of Indigenous Protocols and the ways in which technological development should uphold the pillars of sovereignty that have kept our people and land alive since time immemorial. Much like the land, data belongs to those who have been tending to it for generations.",
      link: "https://rc.infosci.cornell.edu/2023/04/23/indigenous-computing/"
    },
    rising: {
      title: "Rising Voices",
      image: flair,
      blurb: "At the 2025 annual Digital Activism Summit held by Rising Voices I gave a talk to around 50 language activists from Mexico and Central America regarding the state of AI in Indigenous Languages. We discussed the hardships and concerns that arise from the development of thesetechnologies and the ways in which communities are implementing them already. At this conference, we learned together the ways in which we can imagine a brighter future with these technologies as additional tools, without relying solely on them to continue surviving.",
      link: "https://rising.globalvoices.org/cumbre2025/"
    },
    // apizaco: {
    //   title: "Apizaco",
    //   image: apizaco,
    //   blurb: "Swapp is a peer-to-peer marketplace for exchanging secondhand goods. The platform is designed to facilitate sustainable consumption by allowing users to swap items they no longer need with others in their community.",
    //   link: "https://cals.cornell.edu/dani-ramos-ojeda"
    // }
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

      
        <div className = "speakpage">

{/* <h1>Projects</h1> */}

<div className="subnav2">
  <button
    className={`nav-btn ${selectedProject === "neurips" ? "active" : ""}`}
    onClick={() => handleProjectSelect("neurips")}
  >
    NeurIPS
  </button>
  <button
    className={`nav-btn ${selectedProject === "ai_symp" ? "active" : ""}`}
    onClick={() => handleProjectSelect("ai_symp")}
  >
    Indigenous AI Symposium
  </button>
  <button
    className={`nav-btn ${selectedProject === "rising" ? "active" : ""}`}
    onClick={() => handleProjectSelect("rising")}
  >
    Rising Voices
  </button>
  {/* <button
    className={`nav-btn ${selectedProject === "apizaco" ? "active" : ""}`}
    onClick={() => handleProjectSelect("apizaco")}
  >
    Apizaco
  </button> */}
</div>

<div className="podium">
        <div className="presentation">
        <img className="proj_pics2" src={projectData[selectedProject].image} alt="Project image" height={300} />
      
            <div className="blurb2">
           
      
              <div className="blurb-proj2">
              <a className="speaking_links" href = {projectData[selectedProject].link}> {projectData[selectedProject].title}</a>
              <br></br>
                {projectData[selectedProject].blurb}
             </div>
            
        </div>
        <button className="triangle-button" onClick={handleNextProject} >
        
          </button>
      
      </div>
      {/* <h1>{projectData[selectedProject].title}</h1> */}
      
          
          {/* <div className="podium">

          </div> */}


        </div>
        </div> 
        
    );
};
 
export default Speaking;