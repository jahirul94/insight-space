import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Shared/LoginAndSignup/Login/Login";
import Signup from "../pages/Shared/LoginAndSignup/Singup/Signup";
import BlogFeed from "../pages/BlogFeed/BlogFeed";
import ErrorPage from "../ErrorPage/ErrorPage";
import NewsFeed from "../pages/NewsFeed/NewsFeed/NewsFeed";
import QuesAndAns from "../pages/QuesAndAns/QuesAndAns";
import ResetPass from "../pages/Shared/LoginAndSignup/ResetPassword/ResetPass";
import Chat from "../pages/Chat/Chat";
import MyPost from "../pages/NewsFeed/UserDetails/MyPost/MyPost";
import MyBookmarks from "../pages/NewsFeed/UserDetails/MyBookmarks/MyBookmarks";
import ViewProfile from "../pages/NewsFeed/UserDetails/ViewProfile/ViewProfile";
import ContactForm from "../pages/Home/Support/ContactForm";
import FeedBack from "../pages/FeedBack/FeedBack";
import UsersFeedBack from "../pages/UsersFeedBack/UsersFeedBack";



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
                path: "/resetPassword",
                element: <ResetPass></ResetPass>
            },
            {
                path: "/sign-up",
                element: <Signup></Signup>
            },
            {
               path: "/chats",
               element: <Chat></Chat> 
            },
            {
                path: "/my-post",
                element: <MyPost></MyPost>
            },
            {
                path: "/my-bookmarks",
                element: <MyBookmarks></MyBookmarks>
            },
            {

                path: "/view-Profile",
                element: <ViewProfile></ViewProfile>
            },
            {
                path: "/support",
                element: <ContactForm></ContactForm>
            },
            {
                path:"/feedback",
                element: <FeedBack></FeedBack>
            },
            {
                path:"/usersfeedback",
                element: <UsersFeedBack></UsersFeedBack>

            }
        ]
    },
]);

export default router;