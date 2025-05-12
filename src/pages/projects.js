import React, { useState, useEffect } from "react";
import censored_books from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/censored_books.png";
import social_dynamis from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/confirmation_bias.jpg";
import flair from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/FLAIR.JPG";
import swapp from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/swapp-fyp.png";
import butt from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/green_arrow.png";
import { motion, AnimatePresence, vh } from "framer-motion";
import seattle from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/seattle.jpg";
import team from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/Swapp-Team.jpg";


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState("flair");
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (projectData[selectedProject].image.length > 1) { 
        setImageIndex((prevIndex) => (prevIndex + 1) % projectData[selectedProject].image.length);
      }
    }, 5000); // Change image every 3 seconds
  
    return () => clearInterval(interval); // Clean up when unmount or when project changes
  }, [selectedProject]);

  const projectData = {
    flair: {
      link: "https://mila.quebec/en/ai4humanity/applied-projects/first-languages-ai-reality",
      tags: ["Data Sovereignty", "Dataset cleaning", "Pytorch", "Transformers"],
      title: "FLAIR\n",
      image: [flair, seattle],
      blurb: "I spent the summer of 2024 working alongside a brilliant and innovative team of Computer Scientists, mathematicians, and linguists to reimagine approaches to Automatic Speech recognition for Indigenous Languages of the Pacific Northwest. We spent the summer searching through existing literature and participating in code reviews to think of new ways to tackle the small amount of data available for endangered languages.",
      takeaways: "This internship helped me develop my skills as a developer and in presenting complex research papers to an audience. The internship also opened my world to the small but mighty community of language revitalization researchers in the field of computer science."
    },
    swapp: {
      link: "https://apps.apple.com/us/app/swapp-trade-items-on-campus/id1598697038",
      tags: ["Native App Development", "ReactNative", "React", "CSS", "UI/UX", "Marketing"],
      title: "Swapp\n",
      image: [swapp, team],
      blurb: "Swapp is a peer-to-peer marketplace for exchanging secondhand goods. The platform is designed to facilitate sustainable consumption by allowing users to swap items they no longer need with others in our Cornell Community. As part of the umbrella Project Team CUSD, I served as the development and team lead of the project and lead the migration over to a website format to make the site more accessible to other students. Although I primarily served as development lead,  worked to facillitate the work of 3 subteams: development, UI/UX, and Marketing to truly synthesize our application as a marketplace application product. \n Our team worked to integrate a Firebase database into a React Native powered IOS app and a React website.",
      takeaways: "This team helped me grow as a developer and as a leader. I learned all the best practices of self managment and self-teaching, and it helped me truly experience building projects from the ground up."
    },
    censoredBooks: {
      link: "http://4300showcase.infosci.cornell.edu:5167/",
      tags: ["Information Retrieval", "SVD", "Text Mining", "Cosine Similarity", "TF-IDF"],
      title: "Censored Books\n",
      image: [censored_books],
      blurb: "Using Boolean search, Cosine similarity, and SVD, our team created an information retrieval system to combat the growing censorship about various topics, many of which affect marginalized communities to a greater degree. Many of those who are affected by the censorship tend to be students who are eager to access books through public libraries that will educate them about the world around them, as well as give them access to communities that can provide life-saving support systems. When searching up discourse-ridden queries, it is helpful to know which books have been restricted or taken off shelves in order to amplify them and preserve the knowledge and stories that lie within their covers. At the same time, we want to make the history of where and when books about race, LGBTQ+ rights, and feminism have been banned accessible through an information retrieval system.",
      takeaways: "During the course of this project I got to rrally appreciate how valuable data is, and how much information exists within the words we type and post online. Censored Books helped me see how tools can be built that reflect our society in ways that serve society well."
    },
    socialDynamis: {
      link: "https://sdl.as.cornell.edu/",
      tags: ["Python", "OpenAI API", "Experiment Design", "Data Visualization", "Acadmeic Writing"],
      title: "Social Dynamics\n",
      image: [social_dynamis],
      blurb: "My work as part of this research lab involved writing scripts and running experiments to test whether models like chat-gpt and llama-3 exhibit confirmation bias. While plenty of other bias has been detected in LLMs, exploring confirmation bias was an issue we deemed urgent as models are being interwoven into social media sites and potenitally exasterbating echo-chambers and radicalization.",
      takeaways: "My work with the Social Dynamics lab helped me truly immerse myself in the field of research, how to pursue academic writing and how to outline and perform experiments in a new field."
    },
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setImageIndex(0);
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
        <button
          className={`nav-btn ${selectedProject === "censoredBooks" ? "active" : ""}`}
          onClick={() => handleProjectSelect("censoredBooks")}
          style={{fontFamily:"font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}
        >
          Censored Books
        </button>
        <button
          className={`nav-btn ${selectedProject === "socialDynamis" ? "active" : ""}`}
          onClick={() => handleProjectSelect("socialDynamis")}
        >
          Social Dynamics
        </button>
      </div>

      <div className="proj">
        <div className="projects">
          
          <div className="subproj">

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="presentation"
              >
<div style={{minWidth:
    selectedProject === 'flair'|| selectedProject === 'swapp'
      ? '60%' 
      : '40%'}}>
<motion.img
key={imageIndex}
  className="proj_pics"
  src={projectData[selectedProject].image[imageIndex]}
  alt="Project image"
  onClick={() => {
    const totalImages = projectData[selectedProject].image.length;
    setImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }}
  style={{ cursor: 'pointer' , height: 
    projectData[selectedProject].image[imageIndex] === censored_books || projectData[selectedProject].image[imageIndex] === social_dynamis
      ? '40vh' 
      : '60vh',
      marginLeft: selectedProject === 'censoredBooks'
      ? '0px' 
      : 'calc(0.1 * 180px)'
    
    }}

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4 }} // Fade-in duration
/>
</div>

{/* <img className="proj_pics" src={projectData[selectedProject].image} alt="Project image" height={300} /> */}
            <div className="blurb">
            <a

              className="project_links"
              href= {projectData[selectedProject].link}
              style={{
                fontWeight: 'normal',
                fontFamily: 'Inter, sans-serif',
                transition: 'font-weight 0.2s ease',
                marginTop: '10px'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#80A1D4')}
              onMouseLeave={(e) => (e.target.style.color = 'black')}
            >
              {projectData[selectedProject].title}
            </a>
            <button className="triangle-clip" onClick={handleNextProject}>
      
          </button>

            <div className="tag-container" style={{ marginTop: '15px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
  {projectData[selectedProject].tags.map((tag, index) => (
    <span
      key={index}
      style={{
        backgroundColor: '#e0e7ff',
        color: '#3730a3',
        padding: '6px 12px',
        fontSize: '12px',
        borderRadius: '16px',
        fontFamily: 'monospace',
        fontWeight: 500,
        whiteSpace: 'nowrap',
        marginTop: "10px"
      }}
    >
      {tag}
    </span>
  ))}
</div>



              <div className="blurb-proj">
              
              <br />
              <br />
              
                {projectData[selectedProject].blurb}
                <br />
                <h2 className="take">
                  Takeaway:
                </h2>
                {projectData[selectedProject].takeaways}
                <br />
                <br />
                <br />
                <br />

              </div>
            </div>

            </motion.div>
            </AnimatePresence>


          </div>


        
          
        </div>
         
      </div>
    </div>
  );
};

export default Projects;
