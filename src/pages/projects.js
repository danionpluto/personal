import React, {Component} from "react";
 import Link from "react-router-dom";

const Projects = () => {
    return (
        <div className="projpage">

        
        <div className="proj">
            <h1>Projects</h1>
            <div className='projects'>
                <div className = "descr">
                  <h2 className="proj-title">FLAIR</h2>
                  <h3 className="blurb-proj">I gave a talk at the Indigenous Computing 
                    Symposium at Cornell about the preliminary work and literature review I
                    did about Indigenous Language AI, its current status, and Indigenous protocol. 
                    Following frameworks laid down by the Zapatistas such as 
                   "mandando obedeciendo" or "leading by obeying" as well as Emiliano Zapata's
                    belief that the land belongs to those who tend it, I spoke about data, its cultivation, 
                    and its management.</h3>

                    <h3 className="blurb-proj">This talk was generously sponsored by the American Indian and Indigenous Studies Program and the Redistribuited Computing Systems Group at Cornell</h3>

                </div>
             

               <a href="https://mila.quebec/en/project/flair-initiative/">
                  <button className="link-button">
                    FLAIR Website
                  </button>
               </a>


            </div>
            
            
            
            
             <h1>Talks</h1>
             <div className='projects'>
                <div className = "descr">
                  <h2 className="proj-title">Indigenous Language AI</h2>
                  <h3 className="blurb-proj">I gave a talk at the Indigenous Computing 
                    Symposium at Cornell about the preliminary work and literature review I
                    did about Indigenous Language AI, its current status, and Indigenous protocol. 
                    Following frameworks laid down by the Zapatistas such as 
                   "mandando obedeciendo" or "leading by obeying" as well as Emiliano Zapata's
                    belief that the land belongs to those who tend it, I spoke about data, its cultivation, 
                    and its management.</h3>

                    <h3 className="blurb-proj">This talk was generously sponsored by the American Indian and Indigenous Studies Program and the Redistribuited Computing Systems Group at Cornell</h3>

                </div>
             

               <a href="https://cis.cornell.edu/%E2%80%98indigenous-computing%E2%80%99-event-explore-culturally-supportive-technologies">
                  <button className="link-button">
                    To Indigenous Computing Article
                  </button>
               </a>


            </div>
        </div>
        </div>
        
    );
};
 
export default Projects;