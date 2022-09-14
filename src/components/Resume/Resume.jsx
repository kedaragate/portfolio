import "./Resume.css";
export default function Resume() {
  function openInNewTab(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <div className="resume-button-area">
      <button
        className="resume-button"
        onClick={() =>
          openInNewTab("../../Data/resume/Advertisement_AE_FO.pdf")
        }
      >
        View / Download my Resume
      </button>
    </div>
  );
}
