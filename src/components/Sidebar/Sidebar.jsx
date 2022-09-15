import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [hideSideBar, setHideSideBar] = useState(true);

  function handleClick() {
    setHideSideBar(!hideSideBar);
  }

  return (<>
    <div className={`sidebar ${hideSideBar ? "hidden" : ""}`}>
      <button className="sidebar-button" onClick={handleClick}>
       { hideSideBar?<hr /><hr /><hr />:"X"}
        
        
      </button>
</div>
</>
    
  );
}
