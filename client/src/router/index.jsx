import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import AllToursPage from "../pages/allTours";
import BlogPage from "../pages/blog";
import ContactPage from "../pages/contact";
import ErrorPage from "../pages/error";
import TourFullPage from "../pages/tourFull";
import SignUpPage from "../pages/signUp";
import GalleryPage from "../pages/gallery";
import TourDetails from "../pages/tourDetails";
import Details from "../pages/details/Details";
import SignIn from "../admin/pages/signIn";
import Home from "../admin/pages/home";
import News from "../admin/pages/news";
import FeedBack from "../admin/pages/feedback";
import AllToursAdmin from "../admin/pages/allTours";
import AdminRoot from "../admin/root";

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
        path: "/:id",
        element: <TourDetails />,
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
        path: "tourFull",
        element: <TourFullPage />,
      },
      {
        path: "details/:id",
        element: <Details />,
      },
      {
        path: "*",
        element: <ErrorPage />,
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
    ],
  },
]);
