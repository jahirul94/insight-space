import NewsForm from "./NewsForm/NewsForm";
import DisplayNewsFeed from "./DisplayNewsFeed/DisplayNewsFeed";
import Categories from "./Categories/Categories";
import UserDetails from "./UserDetails/USerDetails";
import useAuth from "../../Hooks/UseAuth";

const NewsFeed = () => {
    const { user } = useAuth();
    return (
        <div className="min-h-screen w-10/12 mx-auto">
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-4 w-full">
                <div className="border border-spacing-4">
                    <h2 className="text-lg font-semibold text-center mt-4 mb-6 underline underline-offset-8">Select Your Favourites Categories</h2>
                    <Categories></Categories>
                </div>
                {/* Post start*/}
                <div className="lg:col-span-2">
                    <NewsForm user={user}></NewsForm>
                    <div>
                        <DisplayNewsFeed></DisplayNewsFeed>
                    </div>
                </div>
                {/* Field start */}
                <div className="border border-spacing-4">
                    <h2 className="text-lg font-semibold text-center mt-4 mb-6 underline underline-offset-8">User details</h2>
                    <UserDetails></UserDetails>
                </div>
            </div>
        </div>
    );
};

export default NewsFeed;