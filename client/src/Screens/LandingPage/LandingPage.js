import React from "react";
import { Button, Container, Row } from "react-bootstrap";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./LandingStyles.css";
function LandingPage(){
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Tizon</h1>
              <p className="subtitle">Digitize your Business Card</p>
            </div>
            <div className="buttonContainer">
              <Link to="/login">
                <Button size="lg" className="activeButtonInput">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="ButtonInput"
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
