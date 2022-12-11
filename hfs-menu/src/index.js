import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/home";
import Account from "./views/account";
import Container from "./reusables/container";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Home />
            </Container>
          }
        />
        <Route
          path="/account"
          element={
            <Container>
              <Account />
            </Container>
          }
        />
      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <h1>test</h1>
    //   </header>
    // </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
