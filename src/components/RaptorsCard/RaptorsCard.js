import "./RaptorsCard.scss";

function RaptorsCard({ raptorsCard }) {
  if (!raptorsCard) {
    return (
      <div className="raptors-placeholder-card">
        <p className="raptors-placeholder-card__text">
          Please select a Raptors card
        </p>
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
            {raptorsCard.quote}
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
            <video className="raptors-card__back__video" poster controls>
              <source src={raptorsCard.video}></source>
            </video>
            <p className="single-raptors-card__back__bio">{raptorsCard.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaptorsCard;
