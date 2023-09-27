import { Outlet } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { Provider, useDispatch } from "react-redux";
import { store } from "./redux/store.js";
import UserProvider from "./context/UserProvider";
import BookingPRovider from "./context/BookingPRovider";
import CurrencyProvider from "./context/CurrencyProvider";
function App() {
  return (
    <>
      <UserProvider>
        <BookingPRovider>
          <CurrencyProvider>
            <Provider store={store}>
              <Header />
              <Outlet />
              <Footer />
            </Provider>
          </CurrencyProvider>
        </BookingPRovider>
      </UserProvider>
    </>
  );
}

export default App;
