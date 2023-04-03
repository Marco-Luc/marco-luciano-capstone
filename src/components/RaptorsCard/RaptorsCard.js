import "./RaptorsCard.scss";
import fredVanvleet from "../../assets/Images/RaptorsPlayers/fvv.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

function RaptorsCard() {
  const [raptorsCard, setRaptorsCard] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:2323/players")
  //     .then((response) => {
  //       setRaptorsCard(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="single-raptors-card-container">
      <div className="single-raptors-card">
        <div className="single-raptors-card__front">
          <h2 className="single-raptors-card__front__title">Fred Vanvleet</h2>
          <img
            className="single-raptors-card__image"
            src={fredVanvleet}
            alt="Fred VanVleet"
          />
          <p className="single-raptors-card__front__description">
            Guard, Toronto Raptors
          </p>
          <p className="single-raptors-card__front__quote">
            "Mr. Bet On Yourself"
          </p>
        </div>
        <div className="single-raptors-card__back">
          <h2 className="single-raptors-card__stats-title">Stats</h2>
          <div className="single-raptors-card__stats-container">
            <ul className="single-raptors-card__stats">
              <li className="single-raptors-card__stats-stat">PPG: 25.3</li>
              <li className="single-raptors-card__stats-stat">APG: 7.8</li>
              <li className="single-raptors-card__stats-stat">RPG: 7.7</li>
              <li className="single-raptors-card__stats-stat">SPG: 1</li>
              <li className="single-raptors-card__stats-stat">BPG: 2</li>
            </ul>
            {/* <video className="raptors-card__back__video" poster controls>
              <source src={kawhiClip}></source>
            </video> */}
            <p className="single-raptors-card__back__bio">
              Fred VanVleet is a well-rounded basketball player with a versatile
              skill set. He excels at shooting from beyond the arc, playing
              tough defense, and creating opportunities for himself and his
              teammates. His strong work ethic and leadership skills make him a
              valuable asset to any team, and he was a key player in the Toronto
              Raptors' championship run in 2019.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaptorsCard;
