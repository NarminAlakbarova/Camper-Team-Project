import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import AllToursPage from "../pages/allTours";
import BlogPage from "../pages/blog";
import ContactPage from "../pages/contact";
import ErrorPage from "../pages/error";
import SignUpPage from "../pages/signUp";
import GalleryPage from "../pages/gallery";
import TourDetails from "../pages/tourDetails";
import Details from "../pages/details/Details";
import Home from "../admin/pages/home";
import News from "../admin/pages/news";
import FeedBack from "../admin/pages/feedback";
import AllToursAdmin from "../admin/pages/allTours";
import AdminRoot from "../admin/root";
import Orders from "../admin/pages/orders";
import SignInAdmin from "../admin/pages/signInAdmin";
import AllToursForm from "../admin/pages/addEdit/tours";
import FeedbackForm from "../admin/pages/addEdit/feedback";
import NewsForm from "../admin/pages/addEdit/news";
import BookingPage from "../pages/bookingPage";
import UserProfile from "../pages/userProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "allTours",
        element: <AllToursPage />,
      },
      {
        path: "tourDetails/:id",
        element: <TourDetails />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "signUp",
        element: <SignUpPage />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
      {
        path: "userProfile/:type",
        element: <UserProfile />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "tourDetails/:id/bookingPage",
        element: <BookingPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "feedBack",
        element: <FeedBack />,
      },
      {
        path: "allTours",
        element: <AllToursAdmin />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "signInAdmin",
        element: <SignInAdmin />,
      },
      {
        path: "tours",
        element: <AllToursForm />,
      },
      {
        path: "feedbackForm",
        element: <FeedbackForm />,
      },
      {
        path: "feedbackForm/:id",
        element: <FeedbackForm />,
      },
      {
        path: "newsForm",
        element: <NewsForm />,
      },
      {
        path: "newsForm/:id",
        element: <NewsForm />,
      },
      {
        path: "tours/:id",
        element: <AllToursForm />,
      },
    ],
  },
]);
