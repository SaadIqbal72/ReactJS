import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import ArticleList from "../views/Article/Article_List";
import ArticleDetail from "../views/Article/Article_Detail";
import BuyNFT from "../views/NFT/Buy_NFT";
import CreateNFT from "../views/NFT/Create_NFT";
import ExploreNFT from "../views/NFT/Explore_NFT";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/list" element={<ArticleList />} />
            <Route path="/article/detail/:id" element={<ArticleDetail />} />
            <Route path="/nft/buy" element={<BuyNFT />} />
            <Route path="/nft/create" element={<CreateNFT />} />
            <Route path="/nft/explore" element={<ExploreNFT />} />
        </Routes>
    );
};

export default AppRoutes;