import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
          <p className="sidebar-title">About Me</p>
          <img
            src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg
"
            alt=""
            srcset=""
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
            minima inventore veniam dolorum dignissimos, praesentium laudantium
            commodi nostrum ipsum minus nisi ipsam accusantium similique
            exercitationem quae nobis quod architecto dolorem.
          </p>
      </div>
      <div className="sidebar-item">
          <span className="sidebar-title">
              Categories
          </span>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
                Life
            </li>
            <li className="sidebar-list-item">
                Music
            </li>
            <li className="sidebar-list-item">
                Sport
            </li>
            <li className="sidebar-list-item">
                Style
            </li>
            <li className="sidebar-list-item">
                Tech
            </li>
            <li className="sidebar-list-item">
                Cinema
            </li>
          </ul>
      </div>
      <div className="sidebar-item">
          <span className="sidebar-title">
              Follow Us
          </span>
          <div className="sidebar-social">
          <i class="sidebar-icon fab fa-facebook-square"></i>
          <i class="sidebar-icon fab fa-twitter-square"></i>
          <i class="sidebar-icon fab fa-instagram-square"></i>
          </div>
      </div>
    </div>
  );
}
