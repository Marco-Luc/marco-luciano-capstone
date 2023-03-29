import "./ComparePage.scss";
import fredVanvleet from "../../assets/Images/RaptorsPlayers/fvv.jpg";
import kawhiClip from "../../assets/Videos/RaptorsVideos/KawhiClip.mp4";

function ComparePage() {
  return (
    <section className="compare-page">
      <h2 className="compare-page__header">Compare Stats</h2>
      <div className="compare-section">
        <div className="raptors-card-container">
          <div className="raptors-card">
            <div className="raptors-card__front">
              <h2 className="raptors-card__front__title">Fred Vanvleet</h2>
              <img
                className="raptors-card__image"
                src={fredVanvleet}
                alt="Fred VanVleet"
              />
              <p className="raptors-card__front__description">
                Guard, Toronto Raptors
              </p>
              <p className="raptors-card__front__quote">
                "Mr. Bet On Yourself"
              </p>
            </div>
            <div className="raptors-card__back">
              <h2 className="raptors-card__stats-title">Stats</h2>
              <div className="raptors-card__stats-container">
                <ul className="raptors-card__stats">
                  <li className="raptors-card__stats-stat">PPG: 25.3</li>
                  <li className="raptors-card__stats-stat">APG: 7.8</li>
                  <li className="raptors-card__stats-stat">RPG: 7.7</li>
                  <li className="raptors-card__stats-stat">SPG: 1</li>
                  <li className="raptors-card__stats-stat">BPG: 2</li>
                </ul>
                <video className="raptors-card__back__video" poster controls>
                  <source src={kawhiClip}></source>
                </video>
                <p className="raptors-card__back__bio">
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
        <div className="compare-section__modal">
          <p className="compare-section__modal-text">Testing</p>
        </div>
        <div className="raptors-card-container">
          <div className="raptors-card">
            <div className="raptors-card__front">
              <h2 className="raptors-card__front__title">Fred Vanvleet</h2>
              <img
                className="raptors-card__image"
                src={fredVanvleet}
                alt="Fred VanVleet"
              />
              <p className="raptors-card__front__description">
                Guard, Toronto Raptors
              </p>
              <p className="raptors-card__front__quote">
                "Mr. Bet On Yourself"
              </p>
            </div>
            <div className="raptors-card__back">
              <h2 className="raptors-card__stats-title">Stats</h2>
              <div className="raptors-card__stats-container">
                <ul className="raptors-card__stats">
                  <li className="raptors-card__stats-stat">PPG: 25.3</li>
                  <li className="raptors-card__stats-stat">APG: 7.8</li>
                  <li className="raptors-card__stats-stat">RPG: 7.7</li>
                  <li className="raptors-card__stats-stat">SPG: 1</li>
                  <li className="raptors-card__stats-stat">BPG: 2</li>
                </ul>
                <video className="raptors-card__back__video" poster controls>
                  <source src={kawhiClip}></source>
                </video>
                <p className="raptors-card__back__bio">
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
      </div>
      <div className="compare-page__dropdown-menus">
        <select
          className="compare-page__dropdown-menus__raptors"
          type="text"
          name="category"
          value="raptors"
          placeholder="Please select"
          onChange="temporary"
        >
          <option>Please select</option>
          <option>Fred Vanvleet</option>
          <option>Gary Trent Jr.</option>
          <option>OG Anunoby</option>
          <option>Scottie Barnes</option>
          <option>Pascal Siakam</option>
        </select>
        <select
          className="compare-page__dropdown-menus__celtics"
          type="text"
          name="category"
          value="celtics"
          placeholder="Please select"
          onChange="temporary"
        >
          <option>Please select</option>
          <option>Jaylen Brown</option>
          <option>Jayson Tatum</option>
          <option>Al Horford</option>
          <option>Robert Williams III</option>
        </select>
      </div>
      <div className="compare-page__button-section">
        <button className="compare-page__button-section-button">
          Compare Stats
        </button>
      </div>
    </section>
  );
}

//   {
/* <div class="dropdown">
        <button onclick={myFunction()} className="drop-button">
          Select player
        </button>
        <div id="my-dropdown" className="dropdown-content">
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
        </div>
      </div> */
//   }

//Drop down menu functionality below

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     const dropdowns = document.getElementsByClassName("dropdown-content");
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

export default ComparePage;
