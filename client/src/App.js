import "./App.css";
import Footer from "./components/footer/Footer";
import { Header } from "./components/Header";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Header />
      <AppRoutes/>
      <Footer />
    </>
  );
}

export default App;
