// import React, { useState } from "react";
// import censored_books from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/censored_books.png";
// import social_dynamis from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/me_beach.jpg";
// import flair from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/rising.jpg";
// import swapp from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/back.jpg";
// import neurips from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/neurips.png";
// import aiisp from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/indigenouscomputingconference_01_04282023.jpg";

// import apizaco from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/46a2b6be-1a6e-41d2-aeba-66ad7a315cb5.JPG";
// import { motion, AnimatePresence } from "framer-motion";


// const Speaking = () => {
//   const [selectedProject, setSelectedProject] = useState("neurips");

//   // Define the blurb text and image based on the selected project
//   const projectData = {
//     ai_symp: {
//         title: "Indigenous AI Symposium",
//         date: "April 2023",
//         image: aiisp,
//         blurb: "At this symposium co-hsted by the Redistributive Computing Group and the American Indian and Indigenous sudies program at Cornell, I presented my work regarding how Natural Language Processing and Technology overall can and has been applied to Indigenous languages. I covered the long discussed idea of Indigenous Protocols and the ways in which technological development should uphold the pillars of sovereignty that have kept our people and land alive since time immemorial. Much like the land, data belongs to those who have been tending to it for generations.",
//         link: "https://rc.infosci.cornell.edu/2023/04/23/indigenous-computing/"
//       },
//     neurips: {
//       title: "NeurIPS",
//       date: "December 2024",
//       image: neurips,
//       blurb: "At the NeurIPS 2025 conference, I had the honor of presenting about the state of Indigenous Language AI, particularly along the dimmension of automatic speech recognition and data sovereignty. I presented along with Ryan Conti and Belu Ticona with the support of Michael Runningwolf, Caroline Runningwolf, Shawn Tsosie, and the rest of the Indigigenius team. ",
//       link: "https://neurips.cc/virtual/2024/affinity-event/105016"
//     },
//     rising: {
//       title: "Rising Voices",
//       date: "March 2025",
//       image: flair,
//       blurb: "At the 2025 annual Digital Activism Summit held by Rising Voices I gave a talk to around 50 language activists from Mexico and Central America regarding the state of AI in Indigenous Languages. We discussed the hardships and concerns that arise from the development of thesetechnologies and the ways in which communities are implementing them already. At this conference, we learned together the ways in which we can imagine a brighter future with these technologies as additional tools, without relying solely on them to continue surviving.",
//       link: "https://rising.globalvoices.org/cumbre2025/"
//     },
//     // apizaco: {
//     //   title: "Apizaco",
//     //   image: apizaco,
//     //   blurb: "Swapp is a peer-to-peer marketplace for exchanging secondhand goods. The platform is designed to facilitate sustainable consumption by allowing users to swap items they no longer need with others in their community.",
//     //   link: "https://cals.cornell.edu/dani-ramos-ojeda"
//     // }
//   };
//   const handleProjectSelect = (project) => {
//     setSelectedProject(project);
//   };
//   const handleNextProject = () => {
//     const keys = Object.keys(projectData);
//     const currentIndex = keys.indexOf(selectedProject);
//     const nextIndex = (currentIndex + 1) % keys.length; 
//     setSelectedProject(keys[nextIndex]);
//   };
//   const keys = Object.keys(projectData); // ← move logic ABOVE return
//   const [selectedKey, setSelectedKey] = useState(keys[0]);
//   const selected = projectData[selectedKey];
//     return (
//         <div>
        
//         <div id="div1" style={{ padding: '50px', height: '400px',borderRadius: '8px', display: "flex", flexDirection:"row", alignItems:'center', marginBottom:'50px'}}>
//             <div style={{ padding: '50px', fontSize: '16px', width: '600px'}} >
//             <h2 className= 'speaking2title' style={{fontSize: '70px', marginBottom: '20px', borderBottom: '1px solid black',paddingBottom: '10px',}}>
//                 {selected.title}
//             </h2>
//             <p><strong>{selected.date}</strong></p>
//             <p>{selected.blurb}</p>
//             {/* <a href={selected.link} target="_blank" rel="noopener noreferrer" style={{color:'#80A1D4'}}>
//             Learn more
//           </a> */}
//           <button
//             onClick={() => window.open(selected.link, "_blank")}
//             style={{
//                 backgroundColor: 'transparent',
//                 color: '#80A1D4',
//                 border: '2px solid #80A1D4', // Border to make it look like a button
//                 padding: '10px 20px',
//                 fontSize: '16px',
//                 borderRadius: '8px', // Rounded corners
//                 cursor: 'pointer',
//                 textDecoration: 'none', // Remove underline if any
//                 transition: 'background-color 0.3s, color 0.3s', // Smooth hover effect
//             }}
//             onMouseEnter={(e) => e.target.style.backgroundColor = '#80A1D4'}  // Hover effect
//             onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} // Hover effect
//             >
//             Learn more
//             </button>
//             </div>
//           <img src={selected.image} alt={selected.title} style={{height: '350px', marginLeft:'200px'}} />
//         </div>
  
//         {/* Timeline container */}
// <div style={{
//   display: 'flex',
//   alignItems: 'center',
//   marginTop: '40px',
//   justifyContent: 'center',
//   position: 'relative',
//   width: '100%',
// }}>

//   {/* Timeline line */}
//   <div style={{
//     position: 'absolute',
//     height: '4px',
//     backgroundColor: '#C0B9DD',
//     width: '80%',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     zIndex: 0,
//   }} />

//   {/* Arrow at the end of the line */}
//   <div style={{
//     position: 'absolute',
//     right: '9.5%',
//     top: '50%',
//     transform: 'translateY(-50%)',
//     zIndex: 1,
//     width: 0,
//     height: 0,
//     borderTop: '8px solid transparent',
//     borderBottom: '8px solid transparent',
//     borderLeft: '12px solid #C0B9DD',
//     color: '#C0B9DD',
//     fill: '#C0B9DD',
//   }} />

// <div style={{
//   display: 'flex',
//   justifyContent: 'space-between',
//   width: '80%', // match the timeline line width
//   zIndex: 2,
//   position: 'relative',
  
// }}>
//   {keys.map((key) => (
//     <div key={key} style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       minWidth: '200px',
      

//     }}>
//       <button
//         onClick={() => setSelectedKey(key)}
//         className="timeline-dot"
//         style={{
//           width: '24px',
//           height: '24px',
//           borderRadius: '50%',
//           backgroundColor: key === selectedKey ? '#C0B9DD' : '#DED9E2',
//           border: '1px solid transparent',
//           cursor: 'pointer',
//           zIndex: 3,
//           transition: 'transform 0.2s ease',
//           position: 'relative',
//           top: '24px', // keeps it centered 
//         }}
//         title={projectData[key].title}
//       />
//       <div style={{
//         marginTop: '6px',
//         fontSize: '12px',
//         color: '#333',
//         maxWidth: '80px',
//         textAlign: 'center',
//         whiteSpace: 'normal',
//         wordWrap: 'break-word',
//         overflowWrap: 'break-word',
//         marginTop: '25px'
//       }}>
//         {projectData[key].title}
//       </div>
//     </div>
//   ))}
// </div>
// </div>

//       </div>
    
    
//     );
        

// };
 
// export default Speaking;

import React, { useState } from "react";
import censored_books from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/censored_books.png";
import social_dynamis from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/me_beach.jpg";
import flair from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/rising.jpg";
import swapp from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/back.jpg";
import neurips from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/neurips.png";
import aiisp from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/indigenouscomputingconference_01_04282023.jpg";
import apizaco from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/46a2b6be-1a6e-41d2-aeba-66ad7a315cb5.JPG";
import { motion, AnimatePresence } from "framer-motion";

const Speaking = () => {
  const [selectedKey, setSelectedKey] = useState("neurips");

  // Define the blurb text and image based on the selected project
  const projectData = {
    ai_symp: {
      title: "Indigenous AI Symposium",
      date: "April 2023",
      image: aiisp,
      blurb: "At this symposium co-hosted by the Redistributive Computing Group and the American Indian and Indigenous studies program at Cornell, I presented my work regarding how Natural Language Processing and Technology overall can and has been applied to Indigenous languages. I covered the long discussed idea of Indigenous Protocols and the ways in which technological development should uphold the pillars of sovereignty that have kept our people and land alive since time immemorial.",
      link: "https://rc.infosci.cornell.edu/2023/04/23/indigenous-computing/"
    },
    neurips: {
      title: "NeurIPS",
      date: "December 2024",
      image: neurips,
      blurb: "At the NeurIPS 2025 conference, I had the honor of presenting about the state of Indigenous Language AI, particularly along the dimension of automatic speech recognition and data sovereignty.",
      link: "https://neurips.cc/virtual/2024/affinity-event/105016"
    },
    rising: {
      title: "Rising Voices",
      date: "March 2025",
      image: flair,
      blurb: "At the 2025 annual Digital Activism Summit held by Rising Voices, I gave a talk to around 50 language activists from Mexico and Central America regarding the state of AI in Indigenous Languages.",
      link: "https://rising.globalvoices.org/cumbre2025/"
    }
  };

  const keys = Object.keys(projectData); // ← move logic ABOVE return
  const selected = projectData[selectedKey];

  return (
    <div>
      {/* Animate the project details */}
      <AnimatePresence mode="wait">
        <motion.div
        
          id="div1"
          
          initial={{ opacity: 0, y: 30 }} // Start off-screen and hidden
          animate={{ opacity: 1, y: 0 }} // Animate to normal position and visible
          exit={{ opacity: 0, y: -30 }} // Exit with a fade and slide up
          transition={{ duration: 0.8 }} // Duration of the transition
        >
          <div className="sp" style={{ padding: '50px', fontSize: '16px', width: '600px' }}>
            <h2
              className="speaking2title"
              style={{
                fontSize: '70px',
                marginBottom: '20px',
                borderBottom: '1px solid black',
                paddingBottom: '10px',
              }}
            >
              {selected.title}
            </h2>
            <p>
              <strong>{selected.date}</strong>
            </p>
            <p className='sp_blurb 'style={{fontFamily:'Poppins, sans-serif'}}>{selected.blurb}</p>
            <button
              onClick={() => window.open(selected.link, "_blank")}
              style={{
                backgroundColor: '#e0e7ff',
                color: '#3730a3',
                border: '2px solid transparent', // Border to make it look like a button
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '8px', // Rounded corners
                cursor: 'pointer',
                textDecoration: 'none', // Remove underline if any
                transition: 'background-color 0.3s, color 0.3s', // Smooth hover effect

              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#80A1D4')}  // Hover effect
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#e0e7ff')} // Hover effect
            >
              Learn more
            </button>
          </div>
          <img
          className="sp_pic"
            src={selected.image}
            alt={selected.title}
            
          />
        </motion.div>
      </AnimatePresence>

      {/* Timeline container */}
      
      <div className="timeline-cont">
  {/* Timeline line */}
  <div className="timeline" />

  {/* Arrow at the end of the line */}
  <div className="timeline-arrow" />

  <div className="timeline-items">
    {keys.map((key) => (
      <div key={key} className="timeline-item">
        <button
          onClick={() => setSelectedKey(key)} // Change selectedKey on click
          className={`timeline-dot ${key === selectedKey ? 'selected' : ''}`}
          title={projectData[key].title}
        />
        <div className="timeline-title">
          {projectData[key].title}
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default Speaking;
