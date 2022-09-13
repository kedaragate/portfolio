import "./AboutMe.css";
import myImg from "../../images/myimg/myImg.jpg";
export default function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="my-img-container">
        <img src={myImg} className="my-img" />
      </div>
      <div className="about-me">
        <h2 className="about-me-heading">About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quia officia illum nihil, beatae nobis doloremque. Dolores asperiores,
          dignissimos odit officia illo pariatur fugit. Corrupti, unde saepe.
          Doloremque, eius voluptate dignissimos maxime deleniti quis accusamus
          temporibus nostrum facere tempore itaque? Qui odio culpa cumque
          corrupti perferendis facere sapiente voluptatum recusandae!
        </p>
      </div>
    </div>
  );
}
