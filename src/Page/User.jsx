import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { useState } from "react";
import Ellipse from "../images/Ellipse 1.png";
import img1 from "../images/img 1.png";
import img2 from "../images/img 2.png";
import img3 from "../images/img3.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";

const User = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const users = [
    {
      name: "Lelah Nichols",
      location: "Troy, MI",
      interests: ["clothes", "storm"],
      image: Ellipse,
    },
    {
      name: "Jesus Weiss",
      location: "Fort Worth, TX",
      interests: ["headset", "gadget", "speed", "winter"],
      image: img1,
    },
    {
      name: "Annie Rice",
      location: "Austin, TX",
      interests: ["road", "mountain", "trip", "earth", "nature"],
      image: img2,
    },
    {
      name: "Robert Brower",
      location: "Cincinnati, OH",
      interests: ["Maintenance", "gears", "frames", "repair"],
      image: img3,
    },
    {
      name: "Amy Campbell",
      location: "Warrior, AL",
      interests: ["music", "disks"],
      image: img5,
    },
    {
      name: "Anthony S. Morin",
      location: "Lyndhurst, NJ",
      interests: ["vintage", "electric"],
      image: img6,
    },
  ];

  
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="header">
        <h4>User</h4>
      </div>

      <div className="navbar">
        {/* Search Bar */}
        <div className="search"
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #BFC8E5",
            borderRadius: "4px",
            padding: "16px",
          }}
        >
          <CiSearch />
          <input
            type="text"
            placeholder="Search Users"
            style={{
              border: "none",
              outline: "none",
              flex: 1,
            }}
          />
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes style={{ fontSize: "24px", color: "#333" }} /> 
          ) : (
            <FaBars style={{ fontSize: "24px", color: "#333" }} /> 
          )}
        </div>

        {/* Navbar Menu - Conditionally Rendered */}
        <div className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#">Reputation</a></li>
            <li><a href="#">New users</a></li>
            <li><a href="#">Voters</a></li>
            <li><a href="#">Editors</a></li>
            <li><a href="#">Moderators</a></li>
          </ul>
        </div>
      </div>

      <div className="user-list">
        {users.map((user, index) => (
          <div className="user-item" key={index}>
            <img
              src={user.image}
              alt={user.name}
              className="user-avatar"
            />
            <div className="user-info">
              <p>{user.name}</p>
              <p style={{ fontFamily: 'Popins', fontSize: '14px', color: '#151B32' }}>
                {user.location}
              </p>
            </div>
            <div className="user-interests">
              {user.interests.map((interest, i) => (
                <span key={i}>{interest}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default User;
