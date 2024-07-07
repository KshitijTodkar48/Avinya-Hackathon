import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Room } from "./components/Room";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/room/:roomId" element={<Room/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
