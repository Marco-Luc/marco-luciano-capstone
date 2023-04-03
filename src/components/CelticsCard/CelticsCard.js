import jaysonTatum from "../../assets/Images/CelticsPlayers/jaysontatum2.jpg";
import "./CelticsCard.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function CelticsCard() {
  const [celticsCard, setCelticsCard] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2323/players")
      .then((response) => {
        setCelticsCard(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="single-celtics-card-container">
      <div className="single-celtics-card">
        <div className="single-celtics-card__front">
          <h2 className="single-celtics-card__front__title">Jayson Tatum</h2>
          <img
            className="celtics-card__image"
            src={jaysonTatum}
            alt="Fred VanVleet"
          />
          <p className="single-celtics-card__front__description">
            Forward, Boston Celtics
          </p>
          <p className="single-celtics-card__front__quote">"Taco Jay"</p>
        </div>
        <div className="single-celtics-card__back">
          <h2 className="single-celtics-card__stats-title">Stats</h2>
          <div className="single-celtics-card__stats-container">
            <ul className="single-celtics-card__stats">
              <li className="single-celtics-card__stats-stat">PPG: 25.3</li>
              <li className="single-celtics-card__stats-stat">APG: 7.8</li>
              <li className="single-celtics-card__stats-stat">RPG: 7.7</li>
              <li className="single-celtics-card__stats-stat">SPG: 1</li>
              <li className="single-celtics-card__stats-stat">BPG: 2</li>
            </ul>
            {/* <video className="raptors-card__back__video" poster controls>
              <source src={kawhiClip}></source>
            </video> */}
            <p className="single-celtics-card__back__bio">
              Jayson Tatum is an exceptional player who possesses a wide range
              of skills. He is a versatile scorer who can shoot from long range,
              create his own shot, and attack the basket. Tatum's defensive
              skills are also impressive, and he has the ability to guard
              multiple positions. His talents have earned him a spot on the
              All-NBA team, showcasing his impact on the league.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CelticsCard;
