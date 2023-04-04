// import React from "react";
// import "../Css/AboutUs.css";
// import  aboutData  from "../aboutData";

// const AboutUs = () => {
//   return (
//     <div className="about-container">
//       {/* {aboutData.map((person, index) => {
//         return (
//           <div className="about-card" key={index}>
//             <div className="about-content">
//               <div className="about-img-container">
//                 <img src={person.imageUrl} alt={person.name} className="about-img" />
//               </div>
//               <div className="about-text-container">
//                 <h2 className="about-name">{person.name}</h2>
//                 <h4 className="about-qualification">{person.qualification}</h4>
//                 <p className="about-description">{person.description}</p>
//               </div>
//             </div>
//           </div>
//         );
//       })} */}

//     </div>
//   );
// };

// export default AboutUs;

import React from 'react';
import harsh from '../images/2.png';
import naureen from '../images/1.png';
import '../Css/AboutUs.css';
function AboutUs(props) {
  return (
    <div>
      <div className="about-container">
        <h2 style={{ fontSize: '40px', color: 'green' }}>About Us</h2>
        <div className="aboutus">
          <p>
            Dr. Khan has been teaching Zoology and Botany since 2015 producing
            good ranks in NEET examination. It was going well...
            <br />
            then the Corona outbreak provide opportunity of teaching online in a
            multinational EdTech to the Overseas students. <br />
            Learned to make animation, PPTs, new teaching module and become a
            "Pro" in the online teaching and exam analysis.
            <br />
            <span>
              The start of online teaching journey was a huge success
              academically. And now{' '}
              <span style={{ color: 'black', fontSize: '22px' }}>Dr. Khan</span>{' '}
              is bouncing back with a team of top teachers <br />
              who have produced ranks below 1000 in NEET <br />
              and JEE examinations
            </span>
          </p>
        </div>

        {/* <div className="about-one">
          <div className="drkhan">
            <img />
          </div>
          <div></div>
        </div> */}
<div>
  <div className="about-two">
          <div className="harsh-img">
            <img src={harsh} />
          </div>
          <div className="about-harsh">
            <span>
              From opening a TV set at the age of 7 to{' '}
              <u>
                installing the biggest engineering <br />
                and Aircon systems for AIIMS
              </u>
              , this mechanical engineer turned teacher <br />
              has a knack of explaining everything in physics relating it to
              real world examples. <br />
              Numerous selections of his students into IIT and AIIMS are his
              accolades. <br />
              His physics classes will never let you down on endorphins.
            </span>
          </div>
        </div>
        <div className="about-three">
          <div className="about-naureen">
            <span>
              With <u>Gold medals in graduation and Post-graduation</u> she
              started her teaching career <br />
              along Ph.D. curriculum. She used her live practical experience to
              developed <br />
              Unique method to teach Concepts in the most simple way. Her
              solution-oriented <br />
              classroom teaching and management style is very famous among
              students.
            </span>
          </div>
          <div className="naureen-img">
            <img src={naureen} />
          </div>
        </div>
</div>
        
      </div>
    </div>
  );
}

export default AboutUs;
