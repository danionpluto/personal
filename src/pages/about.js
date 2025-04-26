import React from "react";
import { motion } from "framer-motion";

import beach from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/me_beach.jpg";
import nyc from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/nyc.jpg";
import Navbar from '/Users/danielaramos/Documents/GitHub/personal1/src/App.js';
import me from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/headshot.JPG";
import ind from "/Users/danielaramos/Documents/GitHub/personal1/src/pics/ind.jpg";

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="aboutpage">
      
      <motion.div className="abt" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <img className="pics" src={me} alt="Me image" height={450} />

        <div className="abt-text" style={{ height: "fit-content", backgroundColor: '#C0B9DD' }}>
          <h1 className="aboutTitle" style={{ color: "#594997", marginTop: "80px" }}>Hi I'm Dani!</h1>

          <h3 className="blurb-abt">
            I'm a software developer and student at Cornell University interested in 
            Computational Lingustics, NLP, and how technology can be developed by 
            and for the communities whose data is used to develop it. My main research focus is on ML and how 
            it can be adapted for low resource languages, as well as exploring the biases that exist in the large language models we use in day to day life.
          </h3>

          <br />

          <h3 className="blurb-abt">
            I am currently completing my undergraduate education at Cornell University, 
            completing a bachelors of science in Computer Science in the College of Engineering, and a minor 
            in Linguistics.
          </h3>
        </div>
      </motion.div>

      <motion.div className="abt" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="abt-text" style={{ height: "fit-content", width: "1800px", backgroundColor: "#80A1D4", marginLeft: "30px" }}>
          <h1 className="aboutTitle" style={{ color: "#1a2878", marginTop: "80px" }}>Education and Mentorship</h1>

          <h3 className="blurb-abt">
            At Cornell, I have worked as a facillitator for Academic Excellence 
            Workshops, leading support courses students can take for credit to reinforce their learning. 
            I love teaching and I had the opportunity to be a facillitator for CHEM 2090: General Chemistry 
            for Engineers and CS 3110: Data Structures and Functional Programming.
          </h3>

          <br />

          <h3 className="blurb-abt">
            In the Spring of 2024, I had the chance to work as a TA for CS4300: Language and Information, where I helped grade, held office hours, and served as a project mentor for a group's month long project.
          </h3>

          <br />

          <h3 className="blurb-abt">
            I am also a development lead for the Cornell University Sustainable 
            Design Project Team,'s subteam Alternative Recycling Cornell where we develop Swapp, an IOS app where Cornell 
            students can buy and sell their used items to promote less waste on campus.
          </h3>
        </div>

        <img className="pics" src={beach} alt="Me image" height={700} style={{ marginRight: "50px" }} />
      </motion.div>

      <motion.div className="abt" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <img className="pics" src={ind} alt="Me image" height={450} />

        <div className="abt-text" style={{ height: "fit-content", backgroundColor: "#DED9E2", marginBottom: "40px" }}>
          <h1 className="aboutTitle" style={{ color: "#7C6A8A", marginTop: "80px" }}>My roots, my purpose</h1>

          <h3 className="blurb-abt">
            A big part of my interest in these research topics 
            revolves around Language Reclamation, particularly across the Americas. 
            At talks and for certain projects, I have focused primarily on Nahuatl, 
            due to my family's personal connection to the Sierra Norte de Puebla Variant of Nahuatl.
          </h3>

          <br />

          <h3 className="blurb-abt">
            One of my favorite responsibilities on campus is working as a student ambassador for the 
            American Indian and Indigenous Studies program. I love encouraging and meeting students who are seeking 
            community at Cornell that reflects their cultural background, or who seek to reconnect with their Indigenous roots. 
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
