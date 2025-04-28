import Typewriter from "typewriter-effect";
import React from "react";
const Home = () => {
    
    return (

        <div className="homepage" >
            <div className="home">

            
            
            <div className="home-text">
                <h1 className = "home-title">Software Engineer.</h1>
            <h1 className="typewriter-text"style={{ fontFamily: 'monospace', fontSize: '24px', color:'black', fontWeight:'100' }}>
        < Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .typeString('Hi! My name is Dani <3')
                    .pauseFor(1000)
                    .deleteChars(22)
                    .typeString('Hola! Me llamo Dani <3')
                    .pauseFor(1000)
                    .deleteChars(22)
                    .typeString('Piyali! Na notokah Dani <3')
                    .pauseFor(1000)
                    .deleteChars(26)
                    .typeString('Click About Me to Learn More!')
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