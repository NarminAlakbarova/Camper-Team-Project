import { Outlet } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";
import ArrowUp from "./components/ArrowUp";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
        <ArrowUp />
      </Provider>
    </>
  );
}

export default App;
