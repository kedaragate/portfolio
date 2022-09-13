import "./Header.css";

export default function Header() {
  function getCurrentTime() {
    let currentTime = new Date().getHours();
    if (currentTime > 5 && currentTime < 12) {
      return "Good Morning!";
    } else if ((currentTime >= 12) & (currentTime < 17)) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  }

  return (
    <div className="header-section">
      <span className="heyThereText heading">
        Hey, there {getCurrentTime()}
      </span>
      <span className="myName heading">{`I am Kedar Agate |`}</span>
      <span className="webDeveloperText heading">{`<WebDeveloper/>`}</span>
      <hr></hr>
    </div>
  );
}
