import "./Raptors.scss";
import fredVanvleet from "../../assets/Images/RaptorsPlayers/fvv.jpg";
import garyTrentJr from "../../assets/Images/RaptorsPlayers/gtj.jpg";
import scottieBarnes from "../../assets/Images/RaptorsPlayers/scottie.jpg";
import ogAnunoby from "../../assets/Images/RaptorsPlayers/og.jpg";
import pascalSiakam from "../../assets/Images/RaptorsPlayers/siakam.jpg";
// import jakobPoeltl from "../../assets/Images/RaptorsPlayers/poeltl.jpg";
import kawhiClip from "../../assets/Videos/RaptorsVideos/KawhiClip.mp4";

function Raptors() {
  // do this with an onclick within the card div, rather than addeventlistener

  // const cardFlip = document.querySelectorAll(".card");

  // cardFlip.forEach((card) => {
  //   let individualCard = card;

  //   individualCard.addEventListener("click", (event) => {
  //     const activeCard = document.querySelector(".cards__card-flip--active");
  //     if (activeCard !== null) {
  //       activeCard.classList.remove(".cards__card-flip--active");
  //     }
  //     individualCard.classList.add(".cards__card-flip--active");
  //   });
  // });

  return (
    <section className="main-section">
      <h2 className="main-section__header">Toronto Raptors</h2>
      <div className="card-section">
        <div className="card-container">
          <div className="card">
            <div className="card__front">
              <h2 className="card__front__title">Fred Vanvleet</h2>
              <img
                className="card__image"
                src={fredVanvleet}
                alt="Fred VanVleet"
              />
              <p className="card__front__description">Guard, Toronto Raptors</p>
              <p className="card__front__quote">"Mr. Bet On Yourself"</p>
            </div>
            <div className="card__back">
              <h2 className="card__stats-title">Stats</h2>
              <div className="card__stats-container">
                <ul className="card__stats">
                  <li className="card__stats-stat">PPG: 25.3</li>
                  <li className="card__stats-stat">APG: 7.8</li>
                  <li className="card__stats-stat">RPG: 7.7</li>
                  <li className="card__stats-stat">SPG: 1</li>
                  <li className="card__stats-stat">BPG: 2</li>
                </ul>
                <video className="card__back__video" poster controls>
                  <source src={kawhiClip}></source>
                </video>
                <p className="card__back__bio">
                  Fred VanVleet is a well-rounded basketball player with a
                  versatile skill set. He excels at shooting from beyond the
                  arc, playing tough defense, and creating opportunities for
                  himself and his teammates. His strong work ethic and
                  leadership skills make him a valuable asset to any team, and
                  he was a key player in the Toronto Raptors' championship run
                  in 2019.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card__front">
              <h2 className="card__front__title">Gary Trent Jr.</h2>
              <img
                className="card__image"
                src={garyTrentJr}
                alt="Gary Trent Jr."
              />
              <p className="card__front__description">Guard, Toronto Raptors</p>
              <p className="card__front__quote">"Shaq of the MAC"</p>
            </div>
            <div className="card__back">
              <h2 className="card__stats-title">Stats</h2>
              <div className="card__stats-container">
                <ul className="card__stats">
                  <li className="card__stats-stat">PPG: 25.3</li>
                  <li className="card__stats-stat">APG: 7.8</li>
                  <li className="card__stats-stat">RPG: 7.7</li>
                  <li className="card__stats-stat">SPG: 1</li>
                  <li className="card__stats-stat">BPG: 2</li>
                </ul>
              </div>
              <video className="card__back__video" poster controls>
                <source src={kawhiClip}></source>
              </video>
              <p className="card__back__bio">
                Gary Trent Jr. is a skilled basketball player known for his
                scoring ability, particularly from the three-point line. He also
                has strong defensive skills, including the ability to guard
                multiple positions. His competitiveness and work ethic have
                helped him develop into a valuable player on both ends of the
                court.
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card__front">
              <h2 className="card__front__title">Scottie Barnes</h2>
              <img
                className="card__image"
                src={scottieBarnes}
                alt="Scottie Barnes"
              />
              <p className="card__front__description">
                Guard/Forward/Center, Toronto Raptors
              </p>
              <p className="card__front__quote">"Be great 4"</p>
            </div>
            <div className="card__back">
              <h2 className="card__stats-title">Stats</h2>
              <div className="card__stats-container">
                <ul className="card__stats">
                  <li className="card__stats-stat">PPG: 25.3</li>
                  <li className="card__stats-stat">APG: 7.8</li>
                  <li className="card__stats-stat">RPG: 7.7</li>
                  <li className="card__stats-stat">SPG: 1</li>
                  <li className="card__stats-stat">BPG: 2</li>
                </ul>
              </div>
              <video className="card__back__video" poster controls>
                <source src={kawhiClip}></source>
              </video>
              <p className="card__back__bio">
                Scottie Barnes is a rising star in the NBA with an impressive
                skill set, including his exceptional defensive skills,
                playmaking abilities, and high basketball IQ. His versatility,
                leadership skills, and strong work ethic have also contributed
                to his success, earning him the Rookie of the Year award for the
                2021/2022 season. This recognition highlights his potential to
                become a top player in the league.
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card__front">
              <h2 className="card__front__title">OG Anunoby</h2>
              <img className="card__image" src={ogAnunoby} alt="OG Anunoby" />
              <p className="card__front__description">
                Forward, Toronto Raptors
              </p>
              <p className="card__front__quote">
                "I don’t shoot trying to miss."
              </p>
            </div>
            <div className="card__back">
              <h2 className="card__stats-title">Stats</h2>
              <div className="card__stats-container">
                <ul className="card__stats">
                  <li className="card__stats-stat">PPG: 25.3</li>
                  <li className="card__stats-stat">APG: 7.8</li>
                  <li className="card__stats-stat">RPG: 7.7</li>
                  <li className="card__stats-stat">SPG: 1</li>
                  <li className="card__stats-stat">BPG: 2</li>
                </ul>
              </div>
              <video className="card__back__video" poster controls>
                <source src={kawhiClip}></source>
              </video>
              <p className="card__back__bio">
                OG Anunoby is a talented basketball player known for his
                versatility and strong two-way game. He's an excellent defender
                who can guard multiple positions, and he's also a capable scorer
                and rebounder. His athleticism and high basketball IQ contribute
                to his success on both ends of the court, making him a valuable
                player for the Toronto Raptors.
              </p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="card__front">
              <h2 className="card__front__title">Pascal Siakam</h2>
              <img
                className="card__image"
                src={pascalSiakam}
                alt="Pascal Siakam"
              />
              <p className="card__front__description">
                Forward/Center, Toronto Raptors
              </p>
              <p className="card__front__quote">"Spicy P"</p>
            </div>
            <div className="card__back">
              <h2 className="card__stats-title">Stats</h2>
              <div className="card__stats-container">
                <ul className="card__stats">
                  <li className="card__stats-stat">PPG: 25.3</li>
                  <li className="card__stats-stat">APG: 7.8</li>
                  <li className="card__stats-stat">RPG: 7.7</li>
                  <li className="card__stats-stat">SPG: 1</li>
                  <li className="card__stats-stat">BPG: 2</li>
                </ul>
              </div>
              <video className="card__back__video" poster controls>
                <source src={kawhiClip}></source>
              </video>
              <p className="card__back__bio">
                Pascal Siakam is a highly skilled basketball player who excels
                in scoring, playmaking, and defense. His athleticism, work
                ethic, and versatility have earned him recognition as an NBA
                All-Star, NBA Champion, and NBA Most Improved Player. Siakam's
                contributions to the Toronto Raptors have made him a valuable
                player in the league.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="card-container">
          <div className="card">
            <div className="card__front">
              <h2 className="card__front__title">Jakob Poeltl</h2>
              <img
                className="card__image"
                src={jakobPoeltl}
                alt="Jakob Poeltl"
              />
              <p className="card__front__description">
                Center, Toronto Raptors
              </p>
              <p className="card__front__quote">"The Austrian Hammer"</p>
            </div>
            <div className="card__back">
              <h2 className="card__stats-title">Stats</h2>
              <div className="card__stats-container">
                <ul className="card__stats">
                  <li className="card__stats-stat">PPG: 25.3</li>
                  <li className="card__stats-stat">APG: 7.8</li>
                  <li className="card__stats-stat">RPG: 7.7</li>
                  <li className="card__stats-stat">SPG: 1</li>
                  <li className="card__stats-stat">BPG: 2</li>
                </ul>
              </div>
              <video className="card__back__video" poster controls>
                <source src={kawhiClip}></source>
              </video>
              <p className="card__back__bio">
                Jakob Poeltl is a talented basketball player known for his solid
                defensive skills, particularly as a rim protector and shot
                blocker. He's also a strong rebounder and has shown an ability
                to score efficiently around the basket. His high basketball IQ,
                work ethic, and team-oriented mindset make him a valuable asset
                to any team.
              </p>
            </div> */}
        {/* </div>
        </div> */}
      </div>
    </section>
  );
}

export default Raptors;
