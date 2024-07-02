import React from "react";
import {
  BsHospital,
  BsGrid1X2Fill,
  BsHourglassSplit,
  BsFillArchiveFill,
  BsPeopleFill
 
} from "react-icons/bs";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsHospital className="icon_header" /> Sai Hospital
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className="icon" /> Doctor
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Patient
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            < BsHourglassSplit className="icon" /> Meeting
          </a>
        </li> 
      </ul>
    </aside>
  );
}

export default Sidebar;
