import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer"
import { Header } from './components/Header';
import { EditProfilePage } from './Screens/EditProfile/EditProfilePage';
import LandingPage from './Screens/LandingPage/LandingPage';
import { StatsPage } from './Screens/StatisticsPage/StatsPage';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/stats" element={<StatsPage />} />
        <Route exact path="/edit" element={<EditProfilePage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
