import React from 'react'
import "./StatsStyles.css"
import { Container } from 'react-bootstrap';
import { MainScreen } from '../MainScreen'
import { StatsCard } from './StatsCard';
import stats from '../../data/stats';
export const StatsPage = () => {
  return (
    <MainScreen title="Connected People">
      <Container>
        {
          stats.map((stat)=>{
            return (
              <StatsCard key={stat.id} stat={stat} /> 
            );
          })
        }
      </Container>
    </MainScreen>
  );
}
