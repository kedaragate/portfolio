// import Resume from "../Resume/Advertisement_AE_FO.pdf";
import "./Resume.css";
export default function Resume() {
  function openInNewTab(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <div class="resume-button-area">
      <button
        className="resume-button"
        onClick={() => openInNewTab("../Resume/Advertisement_AE_FO.pdf")}
      >
        View / Download my Resume
      </button>
    </div>
  );
}
