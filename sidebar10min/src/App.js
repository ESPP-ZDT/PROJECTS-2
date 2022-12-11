import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import MySideNav from "./components/MySideNav";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Revenue from "./pages/Revenue";
import NewUsers from "./pages/NewUsers";

function App() {
  return (
    <div>
      <Router>
        <MySideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/new-users" element={<NewUsers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
