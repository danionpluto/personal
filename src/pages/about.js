

import React from "react";
import beach from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/me_beach.jpg";
import nyc from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/nyc.jpg"
const About = () => {
    return (
        <div className="aboutpage">
            <div className="abt">
            <img className = {"pics"} src={nyc} alt="Me image" height={500} width={400}/>
            <div className="abt-text">

      
                <h3 className="blurb">Hi! I'm a software developer and student at Cornell University interested in 
                Computational Lingustics, NLP, and how technology can be developed by 
                and for the communities whose data is used to develop it. My main research focus is on ML and how 
                it can be adapted for low resource languages.</h3>

                <h3 className="blurb">A big part of my interest in these topics 
                revolves around Language Reclamation, particularly across the Americas. 
                At talks and for certain projects, I have focused primarily on Nahuatl, 
                due to my family's personal connection to the Sierra Norte de Puebla Variant of Nahuatl. </h3>

                <h3 className="blurb"> My work this summer will be with First Language AI Reality Initiative, lead by Shawn Tsosie and 
                Micheal and Caroline Runningwolf. </h3>

            

            </div> 

            </div>

            <div className="abt">
            
            <div className="abt-text">

                <h3 className="blurb"> I am currently completing my undergraduate education at Cornell University, 
                completing a bachelors of science in Computer Science in the College of Engineering, and a minor 
                in Linguistics. </h3>
                <h3 className="blurb">At Cornell, I have worked as a facillitator for Academic Excellence 
                Workshops, leading support courses students can take for credit to reinforce their learning. 
                I love teaching and I had the opportunity to be a facillitator for CHEM 2090: General Chemistry 
                for Engineers and CS 3110: Data Structures and Functional Programming. </h3>

                <h3 className="blurb"> I am also a software engineer for the Cornell University Sustainable 
                Design Project Team,'s subteam Alternative Recycling Cornell where we develop Swapp, an IOS app where Cornell 
                students can buy and sell their used items to promote less waste on campus.</h3>

                <h3 className="blurb"> One of my favorite responsibilities on campus is working as a student ambassador for the 
                American Indian and Indigenous Studies program. I love encouraging and meeting students who are seeking 
                community at Cornell that reflects their cultural background, or who seek to reconnect with their Indigenous roots. 
                
                </h3>

            </div> 
            <img className = {"pics"} src={beach} alt="Me image" height={500} width={400}/>
            </div>
            

            
            
        </div>
    );
};
 
export default About;