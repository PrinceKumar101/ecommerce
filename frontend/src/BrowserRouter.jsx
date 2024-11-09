import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile"

export const BrowserRouter = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/profile",
                element:<Profile/>
            }
        ]
    }
])