import React, { useEffect, useState } from "react";
import "./StatsStyles.css";
import { Container } from "react-bootstrap";
import { MainScreen } from "../MainScreen";
import { StatsCard } from "./StatsCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoadSpinner } from "../utils/LoadSpinner";
import { SuccessMessage } from "../utils/SuccessMessage";
// import stats from '../../data/stats';
export const StatsPage = () => {
  const [success, setSuccess] = useState(false);
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
  }, [success]);
  return (
    <MainScreen title="Connected People">
      {success && <SuccessMessage message = "deleted successfully!!"/>} 
      {loading && <LoadSpinner />}
      <Container>
        {stats.length!== 0 ? stats.map((stat) => {
          return <StatsCard key={stat._id} setSuccess= {setSuccess} stat={stat} />;
        }): <h3>No connections yet :(</h3>}
      </Container>
    </MainScreen>
  );
};
