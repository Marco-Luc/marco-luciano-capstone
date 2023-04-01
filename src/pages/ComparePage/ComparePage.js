import "./ComparePage.scss";
import Card1 from "../../components/RaptorsCard/RaptorsCard";
import { useState } from "react";
import RaptorsCard from "../../components/RaptorsCard/RaptorsCard";
import CelticsCard from "../../components/CelticsCard/CelticsCard";

function ComparePage() {
  const [selectedCard, setSelectedCard] = useState("card1");
  const [selectedCard2, setSelectedCard2] = useState("card2");

  const handleCard = (event) => {
    setSelectedCard(event.target.value);
  };

  const handleCard2 = (event) => {
    setSelectedCard2(event.target.value);
  };

  return (
    <section className="compare-page">
      <h2 className="compare-page__header">Compare Stats</h2>
      <div className="compare-section">
        {selectedCard === "card1" && <RaptorsCard />}
        <div className="compare-section__modal">
          <div className="compare-section__modal-teams">
            <p className="compare-section__modal-text">Raptors</p>
            <p className="compare-section__modal-text">Celtics</p>
          </div>
        </div>
        {selectedCard2 === "card2" && <CelticsCard />}
      </div>
      <div className="compare-page__dropdown-menus">
        <select
          className="compare-page__dropdown-menus__raptors"
          type="text"
          name="category"
          value={selectedCard}
          placeholder="Please select"
          onChange={handleCard}
        >
          <option>Please select</option>
          <option value="card1">Fred Vanvleet</option>
          <option>Gary Trent Jr.</option>
          <option>OG Anunoby</option>
          <option>Scottie Barnes</option>
          <option>Pascal Siakam</option>
        </select>
        <select
          className="compare-page__dropdown-menus__celtics"
          type="text"
          name="category"
          value={selectedCard2}
          placeholder="Please select"
          onChange={handleCard2}
        >
          <option>Please select</option>
          <option>Jaylen Brown</option>
          <option value="card2">Jayson Tatum</option>
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
