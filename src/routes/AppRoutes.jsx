import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import ArticleList from "../views/Article/Article_List";
import ArticleDetail from "../views/Article/Article_Detail";
import BuyNFT from "../views/NFT/Buy_NFT";
import CreateNFT from "../views/NFT/Create_NFT";
import ExploreNFT from "../views/NFT/Explore_NFT";

import UserProfile from "../views/User_Profiles/Profile";
import OnSale from "../views/User_Profiles/On_Sale";
import Collectibles from "../views/User_Profiles/Collectibles";
import Likes from "../views/User_Profiles/Likes";
import Following from "../views/User_Profiles/Following";
import Follower from "../views/User_Profiles/Follower";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/list" element={<ArticleList />} />
            <Route path="/article/detail/:id" element={<ArticleDetail />} />
            <Route path="/nft/buy" element={<BuyNFT />} />
            <Route path="/nft/create" element={<CreateNFT />} />
            <Route path="/nft/explore" element={<ExploreNFT />} />

            {/* User Profile Nested Routes */}
            <Route path="/profile" element={<UserProfile />}>
                <Route path="on-sale" element={<OnSale />} />
                <Route path="collectibles" element={<Collectibles />} />
                <Route path="likes" element={<Likes />} />
                <Route path="following" element={<Following />} />
                <Route path="follower" element={<Follower />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;