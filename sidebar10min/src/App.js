import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import MySideNav from "./components/MySideNav";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Revenue from "./pages/Revenue";
import NewUsers from "./pages/NewUsers";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <Row>
        <Col md="2">
          <MySideNav />
        </Col>
        <Col>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/revenue" element={<Revenue />} />
            <Route path="/new-users" element={<NewUsers />} />
          </Routes>
        </Col>
      </Row>
    </Router>
  );
}

export default App;
