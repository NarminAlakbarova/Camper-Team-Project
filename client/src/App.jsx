import { Outlet } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store.js";
import UserProvider from "./context/UserProvider";
function App() {

  return (
    <>
      <UserProvider>
        <Provider store={store}>
          <Header />
          <Outlet />
          <Footer />
        </Provider>
      </UserProvider>
    </>
  );
}

export default App;
