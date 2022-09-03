import { Route, Routes } from "react-router-dom";
import { EditProfilePage } from "../Screens/EditProfile/EditProfilePage";
import { LoginPage } from "../Screens/LoginPage/LoginPage";
import { RegisterPage } from "../Screens/RegisterPage/RegisterPage";
import { StatsPage } from "../Screens/StatisticsPage/StatsPage";
import { AddBusinessPage } from "../Screens/AddBusiness/AddBusinessPage";
import { MasterForm } from "../Screens/MultiStepForm/MasterForm";
import { CardTap } from "../Screens/CardTap/CardTap";
import { HomeScreen } from "../Screens/HomeScreen/HomeScreen";
import { AfterCardTap } from "../Screens/AfterCardTap/AfterCardTap";
import { Error404 } from "../Screens/404/404";

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
        <Route path="/business/:id" element={<AfterCardTap/>} />
        <Route exact path="/business" element={<MasterForm />} />
        <Route path="/card" element={<CardTap />} />
        <Route path="/404" element={<Error404 />} />
      </Routes>
    );
}