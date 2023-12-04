import { Outlet } from "react-router-dom";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import UserProvider from "./context/UserProvider";
import BookingPRovider from "./context/BookingPRovider";
import CurrencyProvider from "./context/CurrencyProvider";
import ModalProvider from "./context/ModalProvider";
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <>
      <HelmetProvider>
        <UserProvider>
          <BookingPRovider>
            <CurrencyProvider>
              <ModalProvider>
                <Provider store={store}>
                  <Header />
                  <Outlet />
                  <Footer />
                </Provider>
              </ModalProvider>
            </CurrencyProvider>
          </BookingPRovider>
        </UserProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
