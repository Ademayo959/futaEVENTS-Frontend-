import Landing from "./Landing"
import Developers from "./Developers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/developers" element={<Developers />}/>
    </Routes>
  )
}

export default App;
