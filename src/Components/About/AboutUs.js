import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import Header_main from "../Header/Header_main";
import Header_navbar from "../Header/Header_navbar";
import ClientReviews from "../Reviews/ClientReviews";
import Faq from "../Faqs/faq";
import Footer from "../FooterRpa/Footer";
import line from "../../Assets/Studies/loading_line.svg";
import TeamMember from "./TeamMember";
import team1 from "../../Assets/ContactUs/team/SirAbdulHayee.png";
import team2 from "../../Assets/ContactUs/team/sirbilal.png";
import team3 from "../../Assets/ContactUs/team/sirSami.png";
import team1hover from "../../Assets/ContactUs/team/SirAbdulHayeehovered.png";
import team2hover from "../../Assets/ContactUs/team/sirbilalhovered.png";
import team3hover from "../../Assets/ContactUs/team/sirSamihovered.png";

import fb from "../../Assets/ContactUs/icons/facebook.svg";
import twitter from "../../Assets/ContactUs/icons/twitter.svg";
import lnkdn from "../../Assets/ContactUs/icons/linkdin.svg";
function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Show the scroll-to-top button when the user has scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    scrollToTop();
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  {
    isVisible && (
      <button onClick={scrollToTop} className="scroll-to-top-button">
        <span>&uarr;</span>
      </button>
    );
  }



  return (
    <div>
      <div className="sticky-header">
        <Header_main />
        <Header_navbar />
      </div>
      <div className="contact_back">
        <div className="container">
          <p className="contact_head">About Us:</p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="main_contact">
          <p className="about_bac">
            OUR TEAM{" "}
            <span className="line_about">
              <img src={line} alt="line" className="line_css_about" />
            </span>
          </p>
        </div>
        <h1 className="head_content">
          Contact for any <br />
          kindly of Information
        </h1>
<div className="team-members">
        <TeamMember
              name="Muhammad Abdul Haye"
              role="Chief Executive Officer, 360Synergytech Pvt. Ltd."
              image={team1}
              hoverImage={team1hover}
              socialIcons={[fb, twitter, lnkdn]}
            />
            <TeamMember
              name="Muhammad Bilal"
              role="Chief Executive Officer, 360Synergytech Pvt. Ltd."
              image={team2}
              hoverImage={team2hover}
              socialIcons={[fb, twitter, lnkdn]}
            />
               <TeamMember
              name="Muhammad Abdus Sami"
              role="Chief Executive Officer, 360Synergytech Pvt. Ltd."
              image={team3}
              hoverImage={team3hover}
              socialIcons={[fb, twitter, lnkdn]}
            />
      </div>
      </div>
      <ClientReviews />
      <Faq />
      <Footer />
    </div>
  );
}

export default AboutUs;
