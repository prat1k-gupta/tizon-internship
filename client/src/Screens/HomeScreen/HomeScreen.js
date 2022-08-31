import React from 'react'
import { useAuth } from '../../AuthContext/AuthContext';
import { CardTap } from '../CardTap/CardTap';
import LandingPage from '../LandingPage/LandingPage';

export const HomeScreen = () => {
  const {auth} = useAuth(); 
  return (
    <>
        {
            auth ? <CardTap/> : <LandingPage/>
        }
    </>
  )
}
