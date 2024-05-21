import React, { useState } from "react";
import "./TeamMember.css";
function TeamMember({ name, role, image, hoverImage, socialIcons }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="team-member"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="team-member-info">
        <img
          src={isHovered ? hoverImage : image}
          alt={name}
          className="team-member-image"
        />
        <div className="team-member-details">
          <p className="team-member-name">{name}</p>
          <p className="team-member-role">{role}</p>
        </div>
      </div>
      {isHovered && (
        <div className="social-icons">
          {socialIcons.map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt={`Social Icon ${index + 1}`}
              className="social-icon m-2"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TeamMember;
