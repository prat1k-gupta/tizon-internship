import "./App.css";
import { useAuth } from "./AuthContext/AuthContext";
import Footer from "./components/footer/Footer";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  const {showNav} = useAuth(); 

  return (
    <>
      {showNav && <Header />}
      <AppRoutes/>
      <Footer />
    </>
  );
}

export default App;
