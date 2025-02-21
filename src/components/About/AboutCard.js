import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Muoi</span>
            from <span className="purple"> DakLak</span>
            <br />
            I'm a Fullstack Developer intern who loves turning ideas into
            reality through code. <br /> Passionate about building web
            applications using React.js, JavaScript, HTML5, and CSS3, and always
            eager to learn new technologies.
          </p>
          <ul>
            <li className="about-activity">🎮 Playing games</li>
            <li className="about-activity">✍️ Writing tech blogs</li>
            <li className="about-activity">✈️ Traveling</li>
            <li className="about-activity">🎬 Watching movies</li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
