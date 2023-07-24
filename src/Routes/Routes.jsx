import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import LogIn from "../Pages/LogIn/LogIn";
import SignUP from "../Pages/SignUP/SignUP";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<LogIn></LogIn>
            },
            {
                path:"/signup",
                element:<SignUP></SignUP>
            }
        ]
    },
]);