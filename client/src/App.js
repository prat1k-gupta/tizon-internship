import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer"
import { Header } from './components/Header';
import { EditProfilePage } from './Screens/EditProfile/EditProfilePage';
import LandingPage from './Screens/LandingPage/LandingPage';
import { LoginPage } from './Screens/LoginPage/LoginPage';
import { RegisterPage } from './Screens/RegisterPage/RegisterPage';
import { StatsPage } from './Screens/StatisticsPage/StatsPage';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/edit" element={<EditProfilePage />} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
