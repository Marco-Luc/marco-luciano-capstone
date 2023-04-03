import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Raptors from "./pages/Raptors/Raptors";
import Celtics from "./pages/Celtics/Celtics";
import ComparePage from "./pages/ComparePage/ComparePage";

function App() {
  const [playerList, setPlayerList] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:2323/players")
      .then((response) => {
        setPlayerList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const raptorsPlayers = playerList?.filter(
    (player) => player.team === "raptors"
  );

  const celticsPlayers = playerList?.filter(
    (player) => player.team === "celtics"
  );

  if (!playerList) {
    return <h1>Loading...</h1>;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/raptors"
          element={<Raptors raptorsPlayers={raptorsPlayers} />}
        />
        <Route
          path="/celtics"
          element={<Celtics celticsPlayers={celticsPlayers} />}
        />
        <Route
          path="/comparepage"
          element={
            <ComparePage
              raptorsPlayers={raptorsPlayers}
              celticsPlayers={celticsPlayers}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
