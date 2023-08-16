import { useContext } from "react";
import useAuth from '../../../../Hooks/UseAuth';
import useMyPost from '../../../../Hooks/useMyPost';
import { ThemeContext } from '../../../../providers/ThemeProvider';
import Categories from '../../Categories/Categories';
import DisplayNewsFeed from '../../DisplayNewsFeed/DisplayNewsFeed';
import NewsForm from '../../NewsForm/NewsForm';
import UserDetails from '../UserDetails';
import MyAllPots from "./MyAllPots";

const MyPost = () => {
    const { info } = useAuth();
    const { theme } = useContext(ThemeContext);

    const [myPost] = useMyPost();

    console.log(myPost)
    return (
        <div className={`${theme === 'dark' ? 'dark' : ''}`}>
        <div className="min-h-screen w-10/12 mx-auto">
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-4 w-full">
                <div className="border border-spacing-4">
                    <h2 className="text-lg font-semibold text-center mt-4 mb-6 underline underline-offset-8">Select Your Favourites Categories</h2>
                    <Categories></Categories>
                </div>
                {/* Post start*/}
                <div className="lg:col-span-2">
                    <NewsForm></NewsForm>
                    <div>
                        <MyAllPots></MyAllPots>
                    </div>
                </div>
                {/* Field start */}
                <div className="border border-spacing-4 pt-8">
                    {info && <UserDetails></UserDetails>}
                </div>
            </div>
        </div>
    </div>
    );
};

export default MyPost;