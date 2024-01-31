

import React from "react";
import beach from "/Users/danielaramos/Documents/GitHub/personal/react-website/src/pics/me_beach.jpg";
const Home = () => {
    return (
        <div className="home">
            <img className = {"pics"} src={beach} alt="Me image" height={400} width={300}/>
            <div className="home-text">

                <h1 className="home-title">Dani Ramos Ojeda</h1>
                <h3 className="blurb">Im a software developer and student interested in NLP, Computational Lingustics, and how technology can be developed by and for communities. </h3>

            </div>
            
            
            
        </div>
    );
};
 
export default Home;