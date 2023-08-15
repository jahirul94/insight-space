import Banner from "../Banner/Banner";
import ChoiceUs from "../ChoiceUs/ChoiceUs";
import CommunityGuidelines from "../CommunityGuidelines/CommunityGuidelines";
import ExploreContent from "../Explore Content/ExploreContent";
import PeerToPeer from "../PeerToPeer/PeerToPeer";

import TopPosts from "../TopPosts/TopPosts";


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <TopPosts></TopPosts>
            <ExploreContent></ExploreContent>
            <ChoiceUs></ChoiceUs>
            <PeerToPeer></PeerToPeer>
            <CommunityGuidelines></CommunityGuidelines>
        </> )
};

export default Home;