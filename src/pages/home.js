
import beach from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/me_beach.jpg";
import nyc from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/nyc.jpg"
import back from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/background_land.png";
import headshot from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/headshot.JPG";
import Typewriter from "typewriter-effect";
import React from "react";
const Home = () => {
    
    return (

        <div className="homepage" >
            <div className="home">
            
            
            <div className="home-text">
            <h1 className = "home-title">Software Engineer.</h1>
            <h1 style={{ fontFamily: 'monospace', fontSize: '24px', color:'black' }}>
        < Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .typeString('Hi! My name is Dani :)')
                    .pauseFor(1000)
                    .deleteChars(22)
                    .typeString('Hola! Me llamo Dani :)')
                    .pauseFor(1000)
                    .deleteChars(22)
                    .typeString('Piyali! Na notokah Dani :)')
                    .pauseFor(1000)
                    .deleteChars(26)
                    .typeString('Hi! My name is Dani :)')
                    .pauseFor(1000)
                    .start();
                }}
            />
            </h1>

            </div> 
           
            </div>
            
           
            

            
            
        </div>
    );
};
 
export default Home;