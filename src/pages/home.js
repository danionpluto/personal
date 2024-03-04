

import React from "react";
import beach from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/me_beach.jpg";
const Home = () => {
    return (
        <div className="homepage">
            <div className="home">
            <img className = {"pics"} src={beach} alt="Me image" height={500} width={400}/>
            <div className="home-text">

                <h1 className="home-title">Dani Ramos Ojeda</h1>
                <h3 className="blurb">Hi! I'm a software developer and student at Cornell University interested in NLP, 
                Computational Lingustics, and how technology can be developed by 
                and for the communities whose data is used to develop it.</h3>

                <h3 className="blurb">A big part of my interest in these topics 
                revolves around Language Reclamation, particularly across the Americas! 
                At talks and for certain projects, I have focused primarily on Nahuatl, 
                due to my family's personal connection to the Sierra Norte de Puebla Variant of Nahuatl. </h3>

            

            </div> 

            </div>

            <div className="home">
            
            <div className="home-text">

                <h3 className="blurb">At Cornell, I have worked as a facillitator for Academic Excellence 
                Workshops, leading support courses students can take for credit to reinforce their learning. 
                I love teaching and I had the opportunity to be a facillitator for CHEM 2090: General Chemistry for Engineers and CS 3110: Data Structures and Functional Programming. 
                Fun Fact: Ocaml is my favorite language.</h3>

            </div> 
            <img className = {"pics"} src={beach} alt="Me image" height={500} width={400}/>
            </div>
            

            
            
        </div>
    );
};
 
export default Home;