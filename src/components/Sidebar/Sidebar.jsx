import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [hideSideBar, setHideSideBar] = useState(true);

  function handleClick() {
    setHideSideBar(!hideSideBar);

  }
let buttonText=hideSideBar?(<div></div><div></div><div></div>):"X"

  return (<>
    <div className={`sidebar ${hideSideBar ? "hidden" : ""}`}>
      <button className="sidebar-button" onClick={handleClick}>
       
        {buttonText}
        
      </button>
</div>
</>
    
  );
}
