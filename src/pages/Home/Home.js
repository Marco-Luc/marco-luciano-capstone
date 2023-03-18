import "./Home.scss";
// import kawhiClip from "../../assets/Videos/RaptorsVideos/KawhiClip.mp4";
import sixersLogo from "../../assets/Logos/TeamLogosSVG/SVG-76ers.svg";
import bucksLogo from "../../assets/Logos/TeamLogosSVG/SVG-bucks.svg";

function Home() {
  return (
    <section className="logos-section">
      <div className="logos-section__rows">
        <img
          className="logos-section__logo logos-section__logo-sixers"
          src={sixersLogo}
          alt="Philadelphia 76ers Logo"
        />
        <img
          className="logos-section__logo logos-section__logo-sixers"
          src={bucksLogo}
          alt="Philadelphia 76ers Logo"
        />
        <img
          className="logos-section__logo logos-section__logo-sixers"
          src={sixersLogo}
          alt="Philadelphia 76ers Logo"
        />
        <img
          className="logos-section__logo logos-section__logo-sixers"
          src={bucksLogo}
          alt="Philadelphia 76ers Logo"
        />
      </div>
    </section>
  );
}
export default Home;

// return (
//   );
// }

// const cards = document.querySelectorAll(".card");

// [...cards].forEach((card) => {
//   card.addEventListener("click", function () {
//     card.classList.toggle("is-flipped");
//   });
// });
// <section className="home">
//   <h1>Lets get it</h1>
//   <div className="scene">
//     <div className="card">
//       <div className="card-face card-front"></div>
//       <div className="card-face card-back">
//         <p className="card-back__player-name">Kawhi Leonard</p>
//         <video className="card-back__video" poster controls>
//           <source src={kawhiClip}></source>
//         </video>
//       </div>
//     </div>
//   </div>
// </section>
