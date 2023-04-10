import "./RaptorsCard.scss";
import derozan2 from "../../assets/Gifs/derozan2.gif";

function RaptorsCard({ raptorsCard }) {
  if (!raptorsCard) {
    return (
      <div className="raptors-placeholder-card">
        <img
          className="raptors-placeholder-card__gif"
          src={derozan2}
          alt="Demar Derozan gif"
        />
      </div>
    );
  }
  return (
    <div className="single-raptors-card-container">
      <div className="single-raptors-card">
        <div className="single-raptors-card__front">
          <h2 className="single-raptors-card__front__title">
            {raptorsCard.name}
          </h2>
          <img
            className="single-raptors-card__image"
            src={raptorsCard.image}
            alt={raptorsCard.name}
          />
          <p className="single-raptors-card__front__description">
            {raptorsCard.description}
          </p>
          <p className="single-raptors-card__front__quote">
            "{raptorsCard.quote}"
          </p>
        </div>
        <div className="single-raptors-card__back">
          <h2 className="single-raptors-card__stats-title">Stats</h2>
          <div className="single-raptors-card__stats-container">
            <ul className="single-raptors-card__stats">
              <li className="single-raptors-card__stats-stat">
                PPG: {raptorsCard.points}
              </li>
              <li className="single-raptors-card__stats-stat">
                APG: {raptorsCard.assists}
              </li>
              <li className="single-raptors-card__stats-stat">
                RPG: {raptorsCard.rebounds}
              </li>
              <li className="single-raptors-card__stats-stat">
                SPG: {raptorsCard.steals}
              </li>
              <li className="single-raptors-card__stats-stat">
                BPG: {raptorsCard.blocks}
              </li>
            </ul>
            <video
              className="single-raptors-card__back__video"
              type="video/mp4"
              src={raptorsCard.video}
              loop
              autoPlay={true}
            ></video>
            <p className="single-raptors-card__back__bio">{raptorsCard.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaptorsCard;
