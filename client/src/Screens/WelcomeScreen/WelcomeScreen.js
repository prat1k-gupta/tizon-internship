import React from 'react'
import heroImg from "../../components/HeroImg.svg";
import { ActiveButton } from '../components/main/Inputs';
import "./welcomescreen.css";

export const WelcomeScreen = () => {
  const name = "Sujeet";
  return (
  <div className='welcomeScreen'>
    <div className='heroSection'>
      <div className='heroText'>
        <h1>Hello {name}</h1>
        <p>Digitize your business card</p> 
        <p>with</p> 
        <h3>Tizon</h3> 
      </div>
      <div className='hero-img'>
        <img src={heroImg} alt="hero" />
      </div>
    </div>
    <ActiveButton type="button" value="Add your business"/>
  </div>
  );
}
