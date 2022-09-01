import "./App.css";
import AuthProvider from "./AuthContext/AuthContext";
import Footer from "./components/footer/Footer";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
    <AuthProvider>
      <Header />
      <AppRoutes/>
      <Footer />
    </AuthProvider>
    </>
  );
}

export default App;
