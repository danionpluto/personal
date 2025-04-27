import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="contactpage">
      <div className="contact">
        <h1 style={{ color: "#594997", fontSize: "2.5rem" }}>Let's Connect!</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "60px",
          }}
        >
          <a
            href="https://linkedin.com/in/daniela-ramos-ojeda-909438221"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
            aria-label="LinkedIn"
          >
            <FaLinkedin style={{ ...iconStyle, color: "#678FCB", fontSize: "80px", }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} />
          </a>

          <a
            href="mailto:dr497@cornell.edu"
            style={iconLinkStyle}
            aria-label="Email"
          >
            <FaEnvelope style={{ ...iconStyle, color:"#DED9E2", fontSize: "80px", }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}/>
          </a>

          <a
            href="https://github.com/danionpluto"
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
            aria-label="GitHub"
          >
            <FaGithub style={{ ...iconStyle, color: "#3730a3", fontSize: "80px", }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} />
          </a>
        </div>
      </div>
    </div>
  );
};

const iconLinkStyle = {
  textDecoration: "none",
};


const iconStyle = {
  fontSize: "80px",
  transition: "transform 0.3s ease",
};

export default SignUp;
