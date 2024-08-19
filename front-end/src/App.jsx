// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import AboutUs from "./pages/aboutUs";
// import ContactUs from "./pages/contactUs";
// import Home from "./pages/Home";
// import Debate_screen from "./component/Debate_screen";
// import Debate_Room from "./component/Room";
// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route path="/Debate_screen" element={<Debate_screen />} />
//           <Route path="/Debate_Room" element={<Debate_Room />} />

//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contact" element={<ContactUs />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
///////////
// src/App.jsx
/////////

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";
import Home from "./pages/Home";
//////////
import Debate_screen from "./component/Debate/Debate_screen";
import Debate_Room from "./component/Debate/Debate_Room";
import CreateDebate from "./component/Debate/DebateRequestForm";
import DebatesList from "./component/Debate/DebateList";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Debatescreen" element={<Debate_screen />} />
        <Route path="/DebateRoom/:roomId" element={<Debate_Room />} />
        <Route path="/create-debate" element={<CreateDebate />} />
        <Route path="/debates" element={<DebatesList />} />

        {/* //////////////// */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
