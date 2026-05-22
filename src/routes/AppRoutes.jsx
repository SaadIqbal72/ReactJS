import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import ArticleList from "../views/Article/Article_List";
import ArticleDetail from "../views/Article/Article_Detail";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/list" element={<ArticleList />} />
            <Route path="/article/detail/:id" element={<ArticleDetail />} />
        </Routes>
    );
};

export default AppRoutes;