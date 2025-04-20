import React, { useState } from "react";
import censored_books from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/censored_books.png";
import social_dynamis from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/me_beach.jpg";
import flair from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/rising.jpg";
import swapp from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/back.jpg";
import neurips from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/neurips.png";
import aiisp from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/indigenouscomputingconference_01_04282023.jpg";



 

const Speaking = () => {
  const [selectedProject, setSelectedProject] = useState("neurips");

  // Define the blurb text and image based on the selected project
  const projectData = {
    neurips: {
      title: "NeurIPS",
      image: neurips,
      blurb: "Using Boolean search, Cosine similarity, and SVD, we created an information retrieval system to combat the growing censorship about various topics, many of which affect marginalized communities to a greater degree. Many of those who are affected by the censorship tend to be students who are eager to access books through public libraries that will educate them about the world around them, as well as give them access to communities that can provide life-saving support systems. When searching up discourse-ridden queries, it is helpful to know which books have been restricted or taken off shelves in order to amplify them and preserve the knowledge and stories that lie within their covers. At the same time, we want to make the history of where and when books about race, LGBTQ+ rights, and feminism have been banned accessible through an information retrieval system.",
      link: "https://neurips.cc/virtual/2024/affinity-event/105016"
    },
    ai_symp: {
      title: "Indigenous AI Symposium",
      image: aiisp,
      blurb: "Social Dynamis is a project focused on exploring social networks and their impact on communities. By analyzing network behaviors and connections, we aim to better understand the dynamics of human interaction and the effects of digital relationships on real-world issues.",
      link: "https://rc.infosci.cornell.edu/2023/04/23/indigenous-computing/"
    },
    rising: {
      title: "Rising Voices",
      image: flair,
      blurb: "FLAIR is an innovative application that enhances user experiences by providing real-time fashion recommendations. By leveraging machine learning algorithms, it offers personalized suggestions based on the user’s style preferences, trends, and clothing history.",
      link: "https://rising.globalvoices.org/cumbre2025/"
    },
    apizaco: {
      title: "Apizaco",
      image: swapp,
      blurb: "Swapp is a peer-to-peer marketplace for exchanging secondhand goods. The platform is designed to facilitate sustainable consumption by allowing users to swap items they no longer need with others in their community.",
      link: "https://cals.cornell.edu/dani-ramos-ojeda"
    }
  };
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
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
  <button
    className={`nav-btn ${selectedProject === "apizaco" ? "active" : ""}`}
    onClick={() => handleProjectSelect("apizaco")}
  >
    Apizaco
  </button>
</div>

<div className="podium">
        <div className="presentation">
        <img className="proj_pics2" src={projectData[selectedProject].image} alt="Project image" height={300} />
        {/* <button className="triangle-button" >
        click
          </button> */}
            <div className="blurb2">
           
      
              <div className="blurb-proj2">
              <a className="speaking_links" href = {projectData[selectedProject].link}> {projectData[selectedProject].title}</a>
              <br></br>
                {projectData[selectedProject].blurb}
             </div>
            
        </div>
      
      </div>
      {/* <h1>{projectData[selectedProject].title}</h1> */}
      
          
          {/* <div className="podium">

          </div> */}


        </div>
        </div> 
        
    );
};
 
export default Speaking;