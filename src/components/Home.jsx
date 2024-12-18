import { useEffect } from "react";
import courses from "../assets/courses.png";
import internship from "../assets/internship.png";
import api from "../assets/api.png";
import projects from "../assets/projects.png";
import incubation from "../assets/incubation.png";
import TypingEffect from "./TypingEffect"; // Import TypingEffect component
import Image1 from "../assets/image1.jpg";
import ML_logo from "../assets/ML_logo.jpg";
import Deeplearning from "../assets/Deeplearning.jpg";
import CyberSecurity from "../assets/CyberSecurity.jpg"
import genai from "../assets/genai.jpg";
import { Link } from "react-router-dom"; // Import the Link component

function Home() {
  useEffect(() => {
    let cards = document.querySelectorAll(".services");
    cards.forEach((card) => {
      card.onmousemove = function (e) {
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;
        card.style.setProperty("--a", x + "px");
        card.style.setProperty("--b", y + "px");
      };
    });
  }, []);

  return (
    <>
      <section className="hero-container">
        {/* Floating Shapes */}
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`floating-shape shape${i + 1}`}></div>
        ))}

        <div className="hero-content">
          <h1 className="hero-title">Welcome to Intellistream</h1>
          <p className="hero-subtitle">Crafting Innovation with Creativity</p>
          <Link to="/projects" className="hero-button">
            Explore More
          </Link>
        </div>
      </section>
      <div className="servicesContainer">
        <div className="servicesHeadingGroup">
          <p className="servicesHeading subHeadings">Our Services</p>
          <p className="servicesHeading2 subHeadings">
            We provide the cutting edge services to fulfill your needs.
          </p>
        </div>
        <div className="services">
          <div className="servicesCard">
            <img src={courses} alt="service1" />
            <p className="servicesDesc">Courses</p>
          </div>
          <div className="servicesCard">
            <img src={internship} alt="service1" />
            <p className="servicesDesc">Internships</p>
          </div>
          <div className="servicesCard">
            <img src={projects} alt="service1" />
            <p className="servicesDesc">Projects</p>
          </div>
          <div className="servicesCard">
            <img src={incubation} alt="service1" />
            <p className="servicesDesc">Incubation</p>
          </div>
          <div className="servicesCard">
            <img src={api} alt="service1" />
            <p className="servicesDesc">APIs</p>
          </div>
        </div>
      </div>
      <div className="servicesContainer">
        <div className="servicesHeadingGroup">
          <p className="servicesHeading subHeadings">Domains we work on</p>
          <p className="servicesHeading2 subHeadings">
            We do Projects that solve real world problems.
          </p>
        </div>
        <div className="services">
          <div className="servicesCard">
            <img src={ML_logo} alt="service1" />
            <p className="servicesDesc">Machine Learning</p>
          </div>
          <div className="servicesCard">
            <img src={Deeplearning} alt="service1" />
            <p className="servicesDesc">Deep Learning</p>
          </div>
          <div className="servicesCard">
            <img src={CyberSecurity} alt="service1" />
            <p className="servicesDesc">Cyber Security</p>
          </div>
          <div className="servicesCard">
            <img src={genai} alt="service1" />
            <p className="servicesDesc">Generative AI</p>
          </div>
          {/* <div className="servicesCard">
            <img src={Image1} alt="service1" />
            <p className="servicesDesc"></p>
          </div> */}
        </div>
      </div>

      <div className="contactSection">
        <p className="contactSection_1 servicesHeading subHeadings">
          We are the Leading Platform of AIs
        </p>
        <TypingEffect /> {/* Use TypingEffect component here */}
        <div className="contactSectionInputContainer">
    <button 
        className="hero-button" 
        onClick={() => window.open("https://forms.gle/kkrYKiT9qrhjKtu58", "_blank")}
    >
        Enroll
    </button>
</div>

      </div>
    </>
  );
}

export default Home;
