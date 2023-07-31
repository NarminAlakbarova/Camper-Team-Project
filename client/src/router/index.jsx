import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import HomePage from "../pages/home"
import AboutPage from "../pages/about"
import AllToursPage from "../pages/allTours"
import BlogPage from "../pages/blog"
import ContactPage from "../pages/contact"
import ErrorPage from "../pages/error"
import TourFullPage from "../pages/tourFull"
import SignInPage from "../pages/signIn"
import SignUpPage from "../pages/signUp"
import GalleryPage from "../pages/gallery"

export const router= createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:"about",
                element:<AboutPage/>
            },
            {
                path:"allTours",
                element:<AllToursPage/>
            },
            {
                path:"blog",
                element:<BlogPage/>
            },
            {
                path:"contact",
                element:<ContactPage/>
            },
            {
                path:"gallery",
                element:<GalleryPage/>
            },
            {
                path:"signUp",
                element:<SignUpPage/>
            },
            {
                path:"signIn",
                element:<SignInPage/>
            },
            {
                path:"tourFull",
                element:<TourFullPage/>
            },
            {
                path:"*",
                element:<ErrorPage/>
            },
        ]
    }
])