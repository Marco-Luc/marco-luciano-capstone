import "./CelticsCard.scss";
import marcusSmartGif from "../../assets/Gifs/marcussmart.gif";

function CelticsCard({ celticsCard }) {
  if (!celticsCard) {
    return (
      <div className="celtics-placeholder-card">
        <img
          className="celtics-placeholder-card__gif"
          src={marcusSmartGif}
          alt="Marcus Smart gif"
        />
      </div>
    );
  }

  return (
    <div className="single-celtics-card-container">
      <div className="single-celtics-card">
        <div className="single-celtics-card__front">
          <h2 className="single-celtics-card__front__title">
            {celticsCard.name}
          </h2>
          <img
            className="celtics-card__image"
            src={celticsCard.image}
            alt={celticsCard.name}
          />
          <p className="single-celtics-card__front__description">
            {celticsCard.description}
          </p>
          <p className="single-celtics-card__front__quote">
            "{celticsCard.quote}"
          </p>
        </div>
        <div className="single-celtics-card__back">
          <h2 className="single-celtics-card__stats-title">Stats</h2>
          <div className="single-celtics-card__stats-container">
            <ul className="single-celtics-card__stats">
              <li className="single-celtics-card__stats-stat">
                PPG: {celticsCard.points}
              </li>
              <li className="single-celtics-card__stats-stat">
                APG: {celticsCard.assists}
              </li>
              <li className="single-celtics-card__stats-stat">
                RPG: {celticsCard.rebounds}
              </li>
              <li className="single-celtics-card__stats-stat">
                SPG: {celticsCard.steals}
              </li>
              <li className="single-celtics-card__stats-stat">
                BPG: {celticsCard.blocks}
              </li>
            </ul>
            <video
              className="single-celtics-card__back__video"
              type="video/mp4"
              loop
              autoPlay={true}
              src={celticsCard.video}
            ></video>
            <p className="single-celtics-card__back__bio">{celticsCard.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CelticsCard;
