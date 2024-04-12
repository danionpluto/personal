

import React from "react";
import beach from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/me_beach.jpg";
import nyc from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/nyc.jpg"
import back from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/background.png";
import Typewriter from "typewriter-effect";
const Home = () => {
    return (

        <div className="homepage" >
            <div className="home">
            
            <div className="home-text">
            <h1 className = "home-title">Dani Ramos Ojeda</h1>

        < Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .typeString("Hi! I'm a Computational Linguistics Researcher and Software Developer!")
                        .pauseFor(2000)
                        .start();
                }}
            />

                
                
               
               
                
                
            

            </div> 
           
            </div>
            
           
            

            
            
        </div>
    );
};
 
export default Home;