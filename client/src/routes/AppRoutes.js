import { Route, Routes } from "react-router-dom";
import { EditProfilePage } from "../Screens/EditProfile/EditProfilePage";
import { LoginPage } from "../Screens/LoginPage/LoginPage";
import { RegisterPage } from "../Screens/RegisterPage/RegisterPage";
import { StatsPage } from "../Screens/StatisticsPage/StatsPage";
import { AddBusinessPage } from "../Screens/AddBusiness/AddBusinessPage";
import { MasterForm } from "../Screens/MultiStepForm/MasterForm";
import { CardTap } from "../Screens/CardTap/CardTap";
import { HomeScreen } from "../Screens/HomeScreen/HomeScreen";

export const AppRoutes = ()=>{
    return (
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/edit" element={<EditProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/editbusiness" element={<AddBusinessPage />} />
        <Route path="/addbusiness" element={<MasterForm />} />
        {/* <Route path="/business/:id" element={<CardTap/>} /> */}
        <Route exact path="/business" element={<MasterForm />} />
        <Route path="/card" element={<CardTap />} />
      </Routes>
    );
}