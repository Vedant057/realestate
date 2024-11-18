import { useContext } from "react";
import "./aboutPage.scss";
import { AuthContext } from "../../context/AuthContext";

function AboutPage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="aboutPage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">We Are Here To Assist You Finding Perfect Property</h1>
          <p>
          Real estate website is a digital space where realtors, home sellers, and homebuyers can get in touch to make a purchase or rent contract for a real estate item!
          </p>
          <div className="boxes">
            <div className="box">
              <h1>5+ Years</h1>
              <h2>Year of Experience</h2>
            </div>
            <div className="box">
              <h1>1 Lakh+</h1>
              <h2>Property Deals</h2>
            </div>
            <div className="box">
              <h1>Communication</h1>
              <h2>Contact With Property Deal</h2>
            </div>
          </div>
          
          <div className="boxes">
            <div className="box">
              <h1>1500+</h1>
              <h2>Team Member</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>Services</h1>
              <h2>Reliable & Secure Property</h2>
            </div>
          </div>
          <div className="boxes">
            <div className="box">
              <h1>Values and Philosophy</h1>
              <h2>Values are the core principles and beliefs that guide your organization’s behavior and decision-making
                &Philosophy encompasses the broader mindset and approach your organization takes toward achieving its mission.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg6.png" alt="" />
      </div>
    </div>
  );
}

export default AboutPage;