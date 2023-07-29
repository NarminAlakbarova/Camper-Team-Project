import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./layout/header";

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <h1>hello</h1>
    </>
  );
}

export default App;
