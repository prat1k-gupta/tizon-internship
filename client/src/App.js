import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from "./Screens/components/footer/Footer"
import { Header } from './components/Header';
import { EditProfilePage } from './Screens/EditProfile/EditProfilePage';
import LandingPage from './Screens/LandingPage/LandingPage';
import { LoginPage } from './Screens/LoginPage/LoginPage';
import { RegisterPage } from './Screens/RegisterPage/RegisterPage';
import { StatsPage } from './Screens/StatisticsPage/StatsPage';
import {AddBusinessPage} from "./Screens/AddBusiness/AddBusinessPage"
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
        <Route path="/addbusiness" element={<AddBusinessPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
