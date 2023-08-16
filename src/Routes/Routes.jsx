import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Shared/LoginAndSignup/Login/Login";
import Signup from "../pages/Shared/LoginAndSignup/Singup/Signup";
import BlogFeed from "../pages/BlogFeed/BlogFeed";
import ErrorPage from "../ErrorPage/ErrorPage";
import NewsFeed from "../pages/NewsFeed/NewsFeed/NewsFeed";
import Chat from "../pages/Chat/Chat";
import QuesAndAns from "../pages/QuesAndAns/QuesAndAns";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/news-feed",
                element:<NewsFeed></NewsFeed> 
            },
            {
                path: "/ques-ans",
                element: <QuesAndAns></QuesAndAns>
            },
            {
                path: "/blog-feed",
                element: <BlogFeed></BlogFeed>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/sign-up",
                element: <Signup></Signup>
            },
            {
               path: "/chat",
               element: <Chat></Chat> 
            }
        ]
    },
]);

export default router;