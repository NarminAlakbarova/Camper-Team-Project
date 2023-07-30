import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./layout/header";
import Footer from "./layout/footer";

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      <h1>hello</h1>
    </>
  );
}

export default App;
