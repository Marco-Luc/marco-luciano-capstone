import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Raptors from "./pages/Raptors/Raptors";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raptors" element={<Raptors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
