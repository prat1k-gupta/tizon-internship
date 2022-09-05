import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../../AuthContext/AuthContext';
import heroImg from "../../components/HeroImg.svg";
import { ActiveButton } from '../components/main/Inputs';
import "./welcomescreen.css";

export const WelcomeScreen = () => {
  const {user} = useAuth();
  return (
    <div className="welcomeScreen">
      <div className="heroSection">
        <div className="heroText">
          <h1>Hello {user && user.name}</h1>
          <p>Let's Digitize your business card</p>
          <p>with</p>
          <h3>Tizon</h3>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="hero" />
        </div>
      </div>
      <Link to="/addbusiness">
        <ActiveButton type="button" value="Add your business" />
      </Link>
    </div>
  );
}
