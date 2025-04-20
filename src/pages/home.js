
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

                
                
               
               
                
                
            

            </div> 
           
            </div>
            
           
            

            
            
        </div>
    );
};
 
export default Home;

// import React from "react";

// const titles = [
//   "Software Engineer.",
//   "Creative Coder.",
//   "UI/UX Designer.",
//   "Data Scientist."
// ];

// const Home = () => {
//   return (
//     <div className="homepage">
//       <div className="orbit-container">
//       <div className="orbit-container">
//   <div className="center-typewriter">
//     <Typewriter
//       onInit={(typewriter) => {
//         typewriter
//           .typeString('Hi! My name is Dani :)')
//           .pauseFor(1000)
//           .deleteChars(22)
//           .typeString('Hola! Me llamo Dani :)')
//           .pauseFor(1000)
//           .deleteChars(22)
//           .typeString('Piyali! Na notokah Dani :)')
//           .pauseFor(1000)
//           .deleteChars(26)
//           .typeString('Hi! My name is Dani :)')
//           .pauseFor(1000)
//           .start();
//       }}
//     />
//   </div>

//   <div className="orbit">
//     {titles.map((title, i) => (
//       <div
//         key={i}
//         className="rotating-text"
//         style={{
//           transform: `rotate(${i * 90}deg) translateY(-140px) rotate(-${i * 90}deg)`
//         }}
//       >
//         {title}
//       </div>
//     ))}
//   </div>
// </div>
//       </div>
    
      
//     </div>
//   );
// };

// export default Home;