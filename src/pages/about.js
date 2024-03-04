import React, {Component} from "react";
 import Link from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>Projects</h1>
            
            
            
             <h1>Talks</h1>
             <div className='projects'>
                <div className = "descr">
                  <h2 className="proj-title">Research Presentation, "Indigenous Language AI"</h2>
                  <h3 className="blurb-proj">I gave a talk at the Indigenous Computing 
                    Symposium about the preliminary work and literature review I
                    did about Indigenous Language AI, its current status, and Indigenous protocol. 
                    Following frameworks laid down by the Zapatistas such as 
                   "mandando obedeciendo" or "leading by obeying" as well as Emiliano Zapata's
                    belief that the land belongs to those who tend it, I spoke about data, its cultivation, 
                    and its management.</h3>

                </div>
             

               <a href="https://cis.cornell.edu/%E2%80%98indigenous-computing%E2%80%99-event-explore-culturally-supportive-technologies">
                  <button className="link-button">
                    To Indigenous Computing Article
                  </button>
               </a>


            </div>
        </div>
        
    );
};
 
export default About;