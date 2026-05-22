import articleImg from "../../assets/images/article-img.svg"
import ArticleCard from '../../components/article_card';

const ArticleList = () => {

    const articleList = [
        {
            id: 1,
            article_image: articleImg,
            article_title: "The Best NFT blockchains",
            bid_created_by: "Martin Lora",
            article_short_descrition: "Do you know the right NFT blockchain for you? It may be strange; But anyone can choose a different blockchain to operate in the world of different tokens. Currently, more than ten blockchain networks support NFTs; But in which of these networks you can succeed, it depends on the type of activity and your goals.",
            article_long_descrition: "Do you know the right NFT blockchain for you? It may be strange; But anyone can choose a different blockchain to operate in the world of different tokens. Currently, more than ten blockchain networks support NFTs; But in which of these networks you can succeed, it depends on the type of activity and your goals.",
            article_published_date: 1779404542,
            article_watched: 8,
        },
        {
            id: 1,
            article_image: articleImg,
            article_title: "The Best NFT blockchains",
            bid_created_by: "Martin Lora",
            article_short_descrition: "Do you know the right NFT blockchain for you? It may be strange; But anyone can choose a different blockchain to operate in the world of different tokens. Currently, more than ten blockchain networks support NFTs; But in which of these networks you can succeed, it depends on the type of activity and your goals.",
            article_long_descrition: "Do you know the right NFT blockchain for you? It may be strange; But anyone can choose a different blockchain to operate in the world of different tokens. Currently, more than ten blockchain networks support NFTs; But in which of these networks you can succeed, it depends on the type of activity and your goals.",
            article_published_date: 1779404542,
            article_watched: 8,
        },
        {
            id: 1,
            article_image: articleImg,
            article_title: "The Best NFT blockchains",
            bid_created_by: "Martin Lora",
            article_short_descrition: "Do you know the right NFT blockchain for you? It may be strange; But anyone can choose a different blockchain to operate in the world of different tokens. Currently, more than ten blockchain networks support NFTs; But in which of these networks you can succeed, it depends on the type of activity and your goals.",
            article_long_descrition: "Do you know the right NFT blockchain for you? It may be strange; But anyone can choose a different blockchain to operate in the world of different tokens. Currently, more than ten blockchain networks support NFTs; But in which of these networks you can succeed, it depends on the type of activity and your goals.",
            article_published_date: 1779404542,
            article_watched: 8,
        },
        {
            id: 1,
            article_image: articleImg,
            article_title: "The Best NFT blockchains",
            bid_created_by: "Martin Lora",
            article_short_descrition: "Do you know the right NFT blockchain for you? It may be strange; But anyone can choose a different blockchain to operate in the world of different tokens. Currently, more than ten blockchain networks support NFTs; But in which of these networks you can succeed, it depends on the type of activity and your goals.",
            article_long_descrition: "Do you know the right NFT blockchain for you? It may be strange; But anyone can choose a different blockchain to operate in the world of different tokens. Currently, more than ten blockchain networks support NFTs; But in which of these networks you can succeed, it depends on the type of activity and your goals.",
            article_published_date: 1779404542,
            article_watched: 8,
        },
    ];


    return (
        <div className='min-h-screen bg-[#202835]'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articleList.map((article) => (
                    <ArticleCard article={article} />
                ))}
            </div>
        </div>
    )
}

export default ArticleList