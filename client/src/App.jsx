import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </>
  );
}

export default App;
