import React, { useEffect, useState } from "react";
import "./StatsStyles.css";
import { Container } from "react-bootstrap";
import { MainScreen } from "../MainScreen";
import { StatsCard } from "./StatsCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import stats from '../../data/stats';
export const StatsPage = () => {
  const [stats, setStats] = useState([]);
  const navigate = useNavigate();
  const fetchStats = async () => {
    try {
      const res = await axios.get("/api/stats");
      setStats(res.data);
    } catch (err) {
      window.alert(err.response.data.error);
      navigate("/");
    }
  };
  useEffect(() => {
    fetchStats();
  }, []);
  return (
    <MainScreen title="Connected People">
      <Container>
        {stats.map((stat) => {
          return <StatsCard key={stat.id} stat={stat} />;
        })}
      </Container>
    </MainScreen>
  );
};
