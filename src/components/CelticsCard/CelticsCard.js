import jaysonTatum from "../../assets/Images/CelticsPlayers/jaysontatum1.jpg";
import "./CelticsCard.scss";

function CelticsCard() {
  return (
    <div className="celtics-card-container">
      <div className="celtics-card">
        <div className="celtics-card__front">
          <h2 className="celtics-card__front__title">Fred Vanvleet</h2>
          <img
            className="celtics-card__image"
            src={jaysonTatum}
            alt="Fred VanVleet"
          />
          <p className="celtics-card__front__description">
            Guard, Toronto Raptors
          </p>
          <p className="celtics-card__front__quote">"Mr. Bet On Yourself"</p>
        </div>
        <div className="celtics-card__back">
          <h2 className="celtics-card__stats-title">Stats</h2>
          <div className="celtics-card__stats-container">
            <ul className="celtics-card__stats">
              <li className="celtics-card__stats-stat">PPG: 25.3</li>
              <li className="celtics-card__stats-stat">APG: 7.8</li>
              <li className="celtics-card__stats-stat">RPG: 7.7</li>
              <li className="celtics-card__stats-stat">SPG: 1</li>
              <li className="celtics-card__stats-stat">BPG: 2</li>
            </ul>
            {/* <video className="raptors-card__back__video" poster controls>
              <source src={kawhiClip}></source>
            </video> */}
            <p className="celtics-card__back__bio">
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

export default CelticsCard;
