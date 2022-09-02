import React from 'react'
import { useAuth } from '../../AuthContext/AuthContext';
import { CardTap } from '../CardTap/CardTap';
import LandingPage from '../LandingPage/LandingPage';
import { WelcomeScreen } from '../WelcomeScreen/WelcomeScreen';

export const HomeScreen = () => {
  const {auth,business} = useAuth(); 
  return (
    <>
        {
            auth ? (business? <CardTap/>: <WelcomeScreen/> ) : <LandingPage/>
        }
    </>
  )
}
