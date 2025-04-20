// import React, {Component} from "react";
//  import Link from "react-router-dom";
//  import censored_books from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/censored_books.png"

// const Projects = () => {
//     return (
//         <div className="projpage">
//             <h1>Projects</h1>
            
//             <div className = "subnav">
            
//               <h4>
//               Censored Books
//               </h4>
//               <h4>
//               Social Dynamis
//               </h4>
//               <h4>
//               FLAIR
//               </h4>
//               <h4>
//               Swapp
//               </h4>
//             </div>
        
//         <div className="proj">

//             <div className='projects'>

//               <div className = 'subproj'>
//               <img className = {"proj_pics"} src={censored_books} alt="CB image" height={300}/>


//               <div className='blurb'>
//               <div className = 'blurb-proj'>
//               Using Boolean search, Cosine similarity, and SVD, we created an information retrieval system to combat the growing censorship about various topics, many of which affect marginalized communities to a greater degree. Many of those who are affected by the censorship tend to be students who are eager to  access books through public libraries that will educate them about the world around them, as well as give them access to communities that can provide life saving support systems. When searching up discourse ridden queries, it is helpful to know which books have been restricted or taken off shelves in order to amplify them and preserve the knowledge and stories that lie within their covers. At the same time, we want to make the history of where and when books about race, LGBTQ+ rights, and feminism have been banned accessible through an information retrieval system.
//               </div>
//               </div>
              
//               </div>

            
    
            
//             </div>

            
//         </div>
//         </div>
        
//     );
// };
 
// export default Projects;


import React, { useState } from "react";
import censored_books from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/censored_books.png";
import social_dynamis from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/confirmation_bias.jpg";
import flair from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/FLAIR.JPG";
import swapp from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/swapp-fyp.png";
import butt from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/green_arrow.png";
const Projects = () => {
  // State to keep track of the selected project
  const [selectedProject, setSelectedProject] = useState("censoredBooks");

  // Define the blurb text and image based on the selected project
  const projectData = {
    censoredBooks: {
      image: censored_books,
      blurb: "Using Boolean search, Cosine similarity, and SVD, our team created an information retrieval system to combat the growing censorship about various topics, many of which affect marginalized communities to a greater degree. Many of those who are affected by the censorship tend to be students who are eager to access books through public libraries that will educate them about the world around them, as well as give them access to communities that can provide life-saving support systems. When searching up discourse-ridden queries, it is helpful to know which books have been restricted or taken off shelves in order to amplify them and preserve the knowledge and stories that lie within their covers. At the same time, we want to make the history of where and when books about race, LGBTQ+ rights, and feminism have been banned accessible through an information retrieval system."
    },
    socialDynamis: {
      image: social_dynamis,
      blurb: "My work as part of this research lab involved writing scripts and running experiments to test whether models like chat-gpt and llama-3 exhibit confirmation bias. While plenty of other bias has been detected in LLMs, exploring confirmation bias was an issue we deemed urgent as models are being interwoven into social media sites and potenitally exasterbating echo-chambers and radicalization."
    },
    flair: {
      image: flair,
      blurb: "FLAIR is an innovative application that enhances user experiences by providing real-time fashion recommendations. By leveraging machine learning algorithms, it offers personalized suggestions based on the user’s style preferences, trends, and clothing history."
    },
    swapp: {
      image: swapp,
      blurb: "Swapp is a peer-to-peer marketplace for exchanging secondhand goods. The platform is designed to facilitate sustainable consumption by allowing users to swap items they no longer need with others in our Cornell Community. As part of the umbrella Project Team CUSD, I served as the development and team lead of the project and lead the migration over to a website format to make the site more accessible to other students. Although I primarily served as development lead,  worked to facillitate the work of 3 subteams: development, UI/UX, and Marketing to truly synthesize our application as a marketplace application product. \n Our team worked to integrate a Firebase database into a React Native powered IOS app and a React website."
    }
  };

  // Handle project selection when a button is clicked
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
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
            <img className="proj_pics" src={projectData[selectedProject].image} alt="Project image" height={300} />
            <div className="blurb">
              <div className="blurb-proj">
                {projectData[selectedProject].blurb}
              </div>
            </div>
          </div>
          
        </div>
        <button className="triangle-clip" >
        click
          </button>
        
        
      </div>
    </div>
  );
};

export default Projects;
