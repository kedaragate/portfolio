import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [showSideBar, setShowSideBar] = useState(false);

  function handleClick() {
    setShowSideBar(!showSideBar);
  }

  return (
    <div className={`sidebar ${showSideBar ? "hidden" : ""}`}>
      <button className="sidebar-button" onClick={handleClick}>
        <hr />
        <hr />
        <hr />
      </button>
    </div>
  );
}
