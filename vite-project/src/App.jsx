import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Profile from "./components/profile/Profile";
import Game from "./components/game/Game";
import Level from "./components/Level";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/game" element={<Game />} />
        <Route path="/level" element={<Level />} />
      </Routes>
    </>
  );
}

export default App;
