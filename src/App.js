import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Raptors from "./pages/Raptors/Raptors";
import Celtics from "./pages/Celtics/Celtics";
import ComparePage from "./pages/ComparePage/ComparePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raptors" element={<Raptors />} />
        <Route path="/celtics" element={<Celtics />} />
        <Route path="/comparepage" element={<ComparePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
