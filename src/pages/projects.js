import React, {Component} from "react";
 import Link from "react-router-dom";

const Projects = () => {
    return (
        <div className="projpage">

        
        <div className="proj">
            <h1>Projects</h1>
            <div className='projects'>

            <div className="subproj"> 
            <h2 className="proj-title">FLAIR</h2>
                <div className = "descr">
                  
                  <h3 className="blurb-proj"> For the Summer of 2024, I will be wrking in Vancouver under Micheal Runningwolf and Shawn Tsosie for the First
                  Languages AI Realities Initiative. We will be working with the Wakashan language families to research innovative ways to workwith low-resource
                  languages for speech recognition.</h3>
                    
                </div>
                <a className = "href" href="https://mila.quebec/en/project/flair-initiative/">
                  <button class="button-55" role="button">
                    FLAIR Website
                  </button>
               </a>
            </div>
             

               

                <div className="subproj"> 

                <h2 className="proj-title">Censored Books</h2>
               <div className = "descr">
                  
                  <h3 className="blurb-proj"> Using Boolean search, Cosine similarity, and SVD, we created an information retrieval system to 
                  combat the growing censorship about various topics, many of which affect marginalized communities to a 
                  greater degree. Many of those who are affected by the censorship tend to be students who are eager to 
                  access books through public libraries that will educate them about the world around them, as well as 
                  give them access to communities that can provide life saving support systems. When searching up discourse 
                  ridden queries, it is helpful to know which books have been restricted or taken off shelves in order to 
                  amplify them and preserve the knowledge and stories that lie within their covers. At the same time, we want 
                  to make the history of where and when books about race, LGBTQ+ rights, and feminism have been banned accessible 
                  through an information retrieval system.</h3>


                    
                </div>
                <a className = "href" href="http://4300showcase.infosci.cornell.edu:5167/">
                  <button class="button-55" role="button">
                    Censored Books
                  </button>
               </a>
                </div>
             

               


            </div>
            
            </div>

            <div className="proj">
            
            
             <h1>Talks</h1>
             <div className='projects'>

             <div className="subproj"> 
             <h2 className="proj-title">Indigenous Language AI</h2>
                <div className = "descr">
                  
                  <h3 className="blurb-proj">I gave a talk at the Indigenous Computing 
                    Symposium at Cornell about the preliminary work and literature review I
                    did about Indigenous Language AI, its current status, and Indigenous protocol. 
                    Following frameworks laid down by the Zapatistas such as 
                   "mandando obedeciendo" or "leading by obeying" as well as Emiliano Zapata's
                    belief that the land belongs to those who tend it, I spoke about data, its cultivation, 
                    and its management.
                    
                    
                    This talk was generously sponsored by the American Indian and Indigenous Studies Program and the Redistribuited Computing Systems Group at Cornell</h3>


                    
                </div>
                <a  className = "href" href="https://cis.cornell.edu/%E2%80%98indigenous-computing%E2%80%99-event-explore-culturally-supportive-technologies">
                    <button class="button-55" role="button">
                    To Indigenous Computing Article
                  </button>
               </a>
             
                </div>
               


            </div>
        </div>
        </div>
        
    );
};
 
export default Projects;