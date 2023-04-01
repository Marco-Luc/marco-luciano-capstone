import "./ComparePage.scss";
import { useState } from "react";
// import PlaceholderCard from "../../components/PlaceholderCard/Placeholdercard";
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
        <div className="compare-section__score-card">
          <div className="compare-section__score-card-stats-list">
            <div className="compare-section__score-card-stats">
              <p className="compare-section__score-card-teams">Raptors</p>
              <p className="compare-section__score-card-stat">Points: </p>
              <p className="compare-section__score-card-stat">Assists: </p>
              <p className="compare-section__score-card-stat">Rebounds: </p>
              <p className="compare-section__score-card-stat">Steals: </p>
              <p className="compare-section__score-card-stat">Blocks: </p>
            </div>
            <div className="compare-section__score-card-stats">
              <p className="compare-section__score-card-teams">Celtics</p>
              <p className="compare-section__score-card-stat">Points: </p>
              <p className="compare-section__score-card-stat">Assists: </p>
              <p className="compare-section__score-card-stat">Rebounds: </p>
              <p className="compare-section__score-card-stat">Steals: </p>
              <p className="compare-section__score-card-stat">Blocks: </p>
            </div>
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
          <option value="placeholdercard">Please select</option>
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
          <option value="placeholdercard">Please select</option>
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

export default ComparePage;
