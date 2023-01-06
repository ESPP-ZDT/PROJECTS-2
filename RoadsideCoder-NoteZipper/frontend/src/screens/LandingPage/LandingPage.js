import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";

import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/mynotes");
    }
  }, []);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome</h1>
              <p className="subtitle">One safe place for all your Notes</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Singup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
