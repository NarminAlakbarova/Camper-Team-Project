import { Outlet } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";
import ArrowUp from "./components/ArrowUp";

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      <ArrowUp/>
    </>
  );
}

export default App;
