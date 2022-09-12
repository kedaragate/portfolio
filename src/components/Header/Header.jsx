import "./Header.css";

export default function Header() {
  return (
    <div className="header-section">
      <span className="heyThereText heading">Hey, there I am</span>
      <span className="myName heading">{`Kedar Agate |`}</span>
      <span className="webDeveloperText heading">{`<WebDeveloper/>`}</span>
      <hr></hr>
    </div>
  );
}
