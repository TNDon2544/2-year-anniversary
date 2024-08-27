import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mail from "./Mail";
import Home from "./Home";
import Time from "./Time";
import Journey from "./Journey";
import Message from "./Message";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mail />} />
      <Route path="/home" element={<Home />} />
      <Route path="/time" element={<Time />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  );
}

export default App;
