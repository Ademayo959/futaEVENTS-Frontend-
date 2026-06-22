import Landing from "./Landing"
import Developers from "./Developers";
import Login from "./Login";
import Signup from "./Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/developers" element={<Developers />}/>
    </Routes>
  )
}

export default App;
