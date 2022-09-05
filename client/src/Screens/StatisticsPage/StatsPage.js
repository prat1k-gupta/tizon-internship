import React, { useEffect, useState } from "react";
import "./StatsStyles.css";
import { Container } from "react-bootstrap";
import { MainScreen } from "../MainScreen";
import { StatsCard } from "./StatsCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoadSpinner } from "../utils/LoadSpinner";
// import stats from '../../data/stats';
export const StatsPage = () => {
  const [stats, setStats] = useState([]);
  const [loading,setLoading] = useState(false); 
  const navigate = useNavigate();
  const fetchStats = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/stats");
      setStats(res.data);
      setLoading(false); 
    } catch (err) {
      navigate("/login");
    }
  };
  useEffect(() => { 
    fetchStats();
  }, []);
  return (
    <MainScreen title="Connected People">
      {loading && <LoadSpinner />}
      <Container>
        {stats.length!== 0 ? stats.map((stat) => {
          return <StatsCard key={stat.id} stat={stat} />;
        }): <div>No connections yet</div>}
      </Container>
    </MainScreen>
  );
};
