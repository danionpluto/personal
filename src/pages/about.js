

import React from "react";
import beach from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/me_beach.jpg";
import nyc from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/nyc.jpg"
import Navbar from '/Users/danielaramos/Documents/GitHub/personal1/src/App.js'
import me from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/headshot.JPG";
import ind from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/ind.jpg";
const About = () => {
    return (
        
        <div className="aboutpage">
            <div className="abt">
            
            <img className = {"pics"} src={me} alt="Me image" height={450}/>
            
           
            <div className="abt-text" style={{ height: "450px" }}>
            <h1 className = "aboutTitle" style={{ color: "#ab7707", marginTop:"80px" }}>Hi I'm Dani!</h1>

                <h3 className="blurb-abt">I'm a software developer and student at Cornell University interested in 
                Computational Lingustics, NLP, and how technology can be developed by 
                and for the communities whose data is used to develop it. My main research focus is on ML and how 
                it can be adapted for low resource languages, as well as exploring the biases that exist in the large language models we use in day to day life.
                </h3>

                <br></br>


                <h3 className="blurb-abt">I am currently completing my undergraduate education at Cornell University, 
                completing a bachelors of science in Computer Science in the College of Engineering, and a minor 
                in Linguistics.
                </h3>



            

            </div> 

            </div>

            <div className = "abt">
            
                <div className="abt-text" style={{ height: "500px", width: "1800px", backgroundColor: "#a7c6e9", marginLeft:"30px"}}>

                <h1 className = "aboutTitle" style={{ color: "#1a2878", marginTop:"80px" }}>Education and Mentorship</h1>

        

                <h3 className = "blurb-abt">
                At Cornell, I have worked as a facillitator for Academic Excellence 
                Workshops, leading support courses students can take for credit to reinforce their learning. 
                I love teaching and I had the opportunity to be a facillitator for CHEM 2090: General Chemistry 
                for Engineers and CS 3110: Data Structures and Functional Programming.
                </h3>
                <br>
                </br>

                <h3 className = "blurb-abt">
                I am also a development lead for the Cornell University Sustainable 
                Design Project Team,'s subteam Alternative Recycling Cornell where we develop Swapp, an IOS app where Cornell 
                students can buy and sell their used items to promote less waste on campus.

                </h3>

                </div>
                <img className = {"pics"} src={beach} alt="Me image" height={500} style={{marginRight:"50px"}}/>
                
            </div>

            <div className="abt">
            
            <img className = {"pics"} src={ind} alt="Me image" height={450}/>
            
           
            <div className="abt-text" style={{ height: "450px", backgroundColor:"#ed98d2" }}>
            <h1 className = "aboutTitle" style={{ color: "#bf2a90", marginTop:"80px" }}>My roots, my purpose</h1>




                <h3 className = "blurb-abt">
                A big part of my interest in these research topics 
                revolves around Language Reclamation, particularly across the Americas. 
                At talks and for certain projects, I have focused primarily on Nahuatl, 
                due to my family's personal connection to the Sierra Norte de Puebla Variant of Nahuatl.

                </h3>

                <br></br>


                <h3 className="blurb-abt">One of my favorite responsibilities on campus is working as a student ambassador for the 
                American Indian and Indigenous Studies program. I love encouraging and meeting students who are seeking 
                community at Cornell that reflects their cultural background, or who seek to reconnect with their Indigenous roots. 
                </h3>



            

            </div> 

            </div>


            

            
            
        </div>
    );
};
 
export default About;