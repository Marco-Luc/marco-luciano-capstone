import "./Celtics.scss";
import marcusSmart from "../../assets/Images/CelticsPlayers/marcussmart2.jpg";
import jaylenBrown from "../../assets/Images/CelticsPlayers/jaylenbrown1.jpg";
import jaysonTatum from "../../assets/Images/CelticsPlayers/jaysontatum2.jpg";
import alHorford from "../../assets/Images/CelticsPlayers/alhorford2.jpg";
import robWilliams from "../../assets/Images/CelticsPlayers/robwilliams2.jpg";
import kawhiClip from "../../assets/Videos/RaptorsVideos/KawhiClip.mp4";

function Celtics(celticsPlayers) {
  return (
    <section className="main-section-celtics">
      <h2 className="main-section-celtics__header">Boston Celtics</h2>
      <div className="celtics-card-section">
        <div className="celtics-card-container">
          <div className="celtics-card">
            <div className="celtics-card__front">
              <h2 className="celtics-card__front__title">Marcus Smart</h2>
              <img
                className="celtics-card__image"
                src={marcusSmart}
                alt="Marcus Smart"
              />
              <p className="celtics-card__front__description">
                Guard, Boston Celtics
              </p>
              <p className="celtics-card__front__quote">"The Cobra"</p>
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
                <video className="celtics-card__back__video" poster controls>
                  <source src={kawhiClip}></source>
                </video>
                <p className="celtics-card__back__bio">
                  Marcus Smart is a versatile player who excels in all facets of
                  the game. His defensive skills are particularly outstanding,
                  earning him the Defensive Player of the Year award. He has a
                  high basketball IQ, strong work ethic, and tenacity that
                  allows him to disrupt opponents' offenses. Offensively, he is
                  a solid playmaker and scorer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="celtics-card-container">
          <div className="celtics-card">
            <div className="celtics-card__front">
              <h2 className="celtics-card__front__title">Jaylen Brown</h2>
              <img
                className="celtics-card__image"
                src={jaylenBrown}
                alt="Jaylen Brown"
              />
              <p className="celtics-card__front__description">
                Guard/Forward, Boston Celtics
              </p>
              <p className="celtics-card__front__quote">
                "Jaylen, The Creator"
              </p>
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
              </div>
              <video className="celtics-card__back__video" poster controls>
                <source src={kawhiClip}></source>
              </video>
              <p className="celtics-card__back__bio">
                Jaylen Brown is a talented two-way player with a well-rounded
                skillset. He has a great combination of athleticism, scoring
                ability, and defensive prowess. Brown is a natural scorer who
                can create his own shot and is equally comfortable driving to
                the basket or shooting from long range. His strong work ethic
                and determination make him a valuable asset to any team.
              </p>
            </div>
          </div>
        </div>
        <div className="celtics-card-container">
          <div className="celtics-card">
            <div className="celtics-card__front">
              <h2 className="celtics-card__front__title">Jayson Tatum</h2>
              <img
                className="celtics-card__image"
                src={jaysonTatum}
                alt="Jayson Tatum"
              />
              <p className="celtics-card__front__description">
                Forward, Boston Celtics
              </p>
              <p className="celtics-card__front__quote">"Taco Jay"</p>
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
              </div>
              <video className="celtics-card__back__video" poster controls>
                <source src={kawhiClip}></source>
              </video>
              <p className="celtics-card__back__bio">
                Jayson Tatum is an exceptional player who possesses a wide range
                of skills. He is a versatile scorer who can shoot from long
                range, create his own shot, and attack the basket. Tatum's
                defensive skills are also impressive, and he has the ability to
                guard multiple positions. His talents have earned him a spot on
                the All-NBA team, showcasing his impact on the league.
              </p>
            </div>
          </div>
        </div>
        <div className="celtics-card-container">
          <div className="celtics-card">
            <div className="celtics-card__front">
              <h2 className="celtics-card__front__title">Al Horford</h2>
              <img
                className="celtics-card__image"
                src={alHorford}
                alt="Al Horford"
              />
              <p className="celtics-card__front__description">
                Forward/Center, Boston Celtics
              </p>
              <p className="celtics-card__front__quote">"Godfather"</p>
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
              </div>
              <video className="celtics-card__back__video" poster controls>
                <source src={kawhiClip}></source>
              </video>
              <p className="celtics-card__back__bio">
                Al Horford is a skilled and versatile big man with excellent
                basketball IQ. He is an elite passer, solid scorer, and a strong
                defender. Horford's accolades include 5x All-Star, 1x All-NBA,
                and 4x All-Defensive Team, highlighting his impact on both ends
                of the court.
              </p>
            </div>
          </div>
        </div>
        <div className="celtics-card-container">
          <div className="celtics-card">
            <div className="celtics-card__front">
              <h2 className="celtics-card__front__title">Rob Williams III</h2>
              <img
                className="celtics-card__image"
                src={robWilliams}
                alt="Rob Williams III"
              />
              <p className="celtics-card__front__description">
                Center, Boston Celtics
              </p>
              <p className="celtics-card__front__quote">"Time Lord"</p>
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
              </div>
              <video className="celtics-card__back__video" poster controls>
                <source src={kawhiClip}></source>
              </video>
              <p className="celtics-card__back__bio">
                Pascal Siakam is a highly skilled basketball player who excels
                in scoring, playmaking, and defense. His athleticism, work
                ethic, and versatility have earned him recognition as an NBA
                All-Star, NBA Champion, and NBA Most Improved Player. Siakam's
                contributions to the Toronto celtics have made him a valuable
                player in the league.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Celtics;
