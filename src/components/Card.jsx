import { Link } from "react-router-dom"; // Import the Link component
import projectImage from "../assets/image2.jpeg";

function Card() {
  return (
    <>
      <h2 className="pHeading">Our Projects</h2>
      <div className="grid-container">
        <div className="grid-item animation1">
          <div className="gradient-container ">
            <div className="pictureContainer">
              <img src={projectImage} className="images" alt="Project Image" />
            </div>
            <div className="detailsContainer">
              <p className="projectTitle gradient-text">PDF Intellisearch</p>
              <p className="projectDesc">
                This Project utilizes GenAI to enable efficient information retrieval from PDFs via text or voice input.
              </p>
              <div className="datewrapbutton">
                <p className="date">22-10-2024</p>
                <Link to="/projectPage">
                  <button className="more_button">More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item animation1">
          <div className="gradient-container ">
            <div className="pictureContainer">
              <img src={projectImage} className="images" alt="Project Image" />
            </div>
            <div className="detailsContainer">
              <p className="projectTitle gradient-text">Cancer Cell Segmentation</p>
              <p className="projectDesc">
              This project employs the FML model with VGG architecture for efficient cancer cell detection and segmentation.
              </p>
              <div className="datewrapbutton">
                <p className="date">22-10-2024</p>
                <Link to="/projectPage2">
                  <button className="more_button">More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid-item animation1">
          <div className="gradient-container ">
            <div className="pictureContainer">
              <img src={projectImage} className="images" alt="Project Image" />
            </div>
            <div className="detailsContainer">
              <p className="projectTitle gradient-text">Voice Activated Photo Capture</p>
              <p className="projectDesc">
              The Project uses voice commands and OpenCV for hands-free webcam photo capture with feedback.
              </p>
              <div className="datewrapbutton">
                <p className="date">22-10-2024</p>
                <Link to="/projectpage1">
                  <button className="more_button">More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid-item animation1">
          <div className="gradient-container ">
            <div className="pictureContainer">
              <img src={projectImage} className="images" alt="Project Image" />
            </div>
            <div className="detailsContainer">
              <p className="projectTitle gradient-text">DataKollect</p>
              <p className="projectDesc">
                The Project focuses on the Date Collection and Preprocessing
                using ML Algorithms.
              </p>
              <div className="datewrapbutton">
                <p className="date">22-10-2024</p>
                <Link to="/projectPage">
                  <button className="more_button">More</button>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="grid-item animation1">
          <div className="gradient-container ">
            <div className="pictureContainer">
              <img src={projectImage} className="images" alt="Project Image" />
            </div>
            <div className="detailsContainer">
              <p className="projectTitle gradient-text">DataKollect</p>
              <p className="projectDesc">
                The Project focuses on the Date Collection and Preprocessing
                using ML Algorithms.
              </p>
              <div className="datewrapbutton">
                <p className="date">22-10-2024</p>
                <Link to="/projectPage">
                  <button className="more_button">More</button>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="grid-item animation1">
          <div className="gradient-container ">
            <div className="pictureContainer">
              <img src={projectImage} className="images" alt="Project Image" />
            </div>
            <div className="detailsContainer">
              <p className="projectTitle gradient-text">DataKollect</p>
              <p className="projectDesc">
                The Project focuses on the Date Collection and Preprocessing
                using ML Algorithms.
              </p>
              <div className="datewrapbutton">
                <p className="date">22-10-2024</p>
                <Link to="/projectPage">
                  <button className="more_button">More</button>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="grid-item animation1">
          <div className="gradient-container ">
            <div className="pictureContainer">
              <img src={projectImage} className="images" alt="Project Image" />
            </div>
            <div className="detailsContainer">
              <p className="projectTitle gradient-text">DataKollect</p>
              <p className="projectDesc">
                The Project focuses on the Date Collection and Preprocessing
                using ML Algorithms.
              </p>
              <div className="datewrapbutton">
                <p className="date">22-10-2024</p>
                <Link to="/projectPage">
                  <button className="more_button">More</button>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
export default Card;


// import { Link } from "react-router-dom";
// import projectImage from "../assets/image2.jpeg";

// function Card() {
//   const projects = [
//     {
//       id: "1",
//       title: "PDF Intellisearch",
//       description: "The Project focuses on the Data Collection and Preprocessing using ML Algorithms.",
//       date: "22-10-2024",
//       route: "/projectPage/1",
//     },
//     {
//       id: "2",
//       title: "DataKollect",
//       description: "The Project focuses on the Data Collection and Preprocessing using ML Algorithms.",
//       date: "22-10-2024",
//       route: "/projectPage/2",
//     },
//     {
//       id: "3",
//       title: "Voice Activated Photo Capture",
//       description: "The Project focuses on the Data Collection and Preprocessing using ML Algorithms.",
//       date: "22-10-2024",
//       route: "/projectpage",
//     },
//   ];

//   return (
//     <>
//       <h2 className="pHeading">Our Projects</h2>
//       <div className="grid-container">
//         {projects.map((project) => (
//           <div className="grid-item animation1" key={project.id}>
//             <div className="gradient-container">
//               <div className="pictureContainer">
//                 <img src={projectImage} className="images" alt="Project Image" />
//               </div>
//               <div className="detailsContainer">
//                 <p className="projectTitle gradient-text">{project.title}</p>
//                 <p className="projectDesc">{project.description}</p>
//                 <div className="datewrapbutton">
//                   <p className="date">{project.date}</p>
//                   <Link to={project.route}>
//                     <button className="more_button">More</button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Card;
