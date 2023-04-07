import "./Raptors.scss";

function Raptors({ raptorsPlayers }) {
  console.log(raptorsPlayers);

  if (!raptorsPlayers) {
    return <h1>Loading...</h1>;
  }
  return (
    <section className="main-raptors">
      <div className="main-raptors__header-container">
        <h2 className="main-raptors__header">Toronto Raptors</h2>
      </div>
      <div className="main-raptors-section">
        {raptorsPlayers?.map((raptorsPlayer) => {
          return (
            <div className="raptors-card-section">
              <div className="raptors-card-container">
                <div className="raptors-card">
                  <div className="raptors-card__front">
                    <h2 className="raptors-card__front__title">
                      {raptorsPlayer.name}
                    </h2>
                    <img
                      className="raptors-card__image"
                      src={raptorsPlayer.image}
                      alt={raptorsPlayer.name}
                    />
                    <p className="raptors-card__front__description">
                      {raptorsPlayer.description}
                    </p>
                    <p className="raptors-card__front__quote">
                      "{raptorsPlayer.quote}"
                    </p>
                  </div>
                  <div className="raptors-card__back">
                    <h2 className="raptors-card__stats-title">Stats</h2>
                    <div className="raptors-card__stats-container">
                      <ul className="raptors-card__stats">
                        <li className="raptors-card__stats-stat">
                          PPG: {raptorsPlayer.points}
                        </li>
                        <li className="raptors-card__stats-stat">
                          APG: {raptorsPlayer.assists}
                        </li>
                        <li className="raptors-card__stats-stat">
                          RPG: {raptorsPlayer.rebounds}
                        </li>
                        <li className="raptors-card__stats-stat">
                          SPG: {raptorsPlayer.steals}
                        </li>
                        <li className="raptors-card__stats-stat">
                          BPG: {raptorsPlayer.blocks}
                        </li>
                      </ul>
                      <video
                        className="raptors-card__back__video"
                        type="video/mp4"
                        src={raptorsPlayer.video}
                        loop
                        autoplay=""
                      ></video>
                      <p className="raptors-card__back__bio">
                        {raptorsPlayer.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Raptors;
