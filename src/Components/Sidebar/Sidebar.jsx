import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" src={assets.menu_icon} alt="" />
        <div className="new-chat">
          <img className="" src={assets.plus_icon} alt="" />
          <p>New Chat</p>
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent_entry">
              <img className="" src={assets.message_icon} alt="" />
              <p>What is react ...</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom_item recent_entry">
            <img src={assets.question_icon} alt="" />
            <p>Help</p>
          </div>
          <div className="bottom_item recent_entry">
            <img src={assets.history_icon} alt="" />
            <p>Activity</p>
          </div>
          <div className="bottom_item recent_entry">
            <img src={assets.setting_icon} alt="" />
            <p>Setting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
