import CommonSlider from '../components/slider/simple_slider';
import BrandsStrip from '../components/brands-strip';
import BidCard from '../components/bid_card';
import CollectionCard from '../components/collection_card';
import ArticleCard from '../components/article_card';
import TopCollectionCard from '../components/top_collection_card';
import appStoreLogo from "../assets/images/app-store-logo.png"
import nftBannerImg from "../assets/images/create-nft-banner-img.svg"
import nftImage from "../assets/images/nft-1.svg";
import collectionAdmin from "../assets/images/collection-admin.svg";
import collectionImg1 from "../assets/images/collection-img-1.svg"
import collectionImg2 from "../assets/images/collection-img-2.svg"
import collectionImg3 from "../assets/images/collection-img-3.svg"
import collectionImg4 from "../assets/images/collection-img-4.svg"
import collectionImg5 from "../assets/images/collection-img-5.svg"
import articleImg from "../assets/images/article-img.svg"

const bidList = [
    {
        id: 1,
        bid_image: nftImage,
        bid_title: "Inner portrait #3425",
        bid_created_by: "Martin Lora",
        bid_highest: "15.25",
        bid_counter: 536312,
    },
    {
        id: 2,
        bid_image: nftImage,
        bid_title: "Inner portrait #3425",
        bid_created_by: "Martin Lora",
        bid_highest: "15.25",
        bid_counter: 36312,
    },
    {
        id: 3,
        bid_image: nftImage,
        bid_title: "Inner portrait #3425",
        bid_created_by: "Martin Lora",
        bid_highest: "15.25",
        bid_counter: 936312,
    },
    {
        id: 3,
        bid_image: nftImage,
        bid_title: "Inner portrait #3425",
        bid_created_by: "Martin Lora",
        bid_highest: "15.25",
        bid_counter: 36312,
    },
];

const collectionList = [
    {
        id: 1,
        collection_images: {
            collection_image_1: collectionImg1,
            collection_image_2: collectionImg2,
            collection_image_3: collectionImg3,
            collection_image_4: collectionImg4,
            collection_image_5: collectionImg5,
        },
        collection_title: "Santiago collection",
        collection_created_by: "@Martin janon",
        collection_user: collectionAdmin
    },
    {
        id: 1,
        collection_images: {
            collection_image_1: collectionImg1,
            collection_image_2: collectionImg2,
            collection_image_3: collectionImg3,
            collection_image_4: collectionImg4,
            collection_image_5: collectionImg5,
        },
        collection_title: "Santiago collection",
        collection_created_by: "@Martin janon",
        collection_user: collectionAdmin
    },
    {
        id: 1,
        collection_images: {
            collection_image_1: collectionImg1,
            collection_image_2: collectionImg2,
            collection_image_3: collectionImg3,
            collection_image_4: collectionImg4,
            collection_image_5: collectionImg5,
        },
        collection_title: "Santiago collection",
        collection_created_by: "@Martin janon",
        collection_user: collectionAdmin
    },
    {
        id: 1,
        collection_images: {
            collection_image_1: collectionImg1,
            collection_image_2: collectionImg2,
            collection_image_3: collectionImg3,
            collection_image_4: collectionImg4,
            collection_image_5: collectionImg5,
        },
        collection_title: "Santiago collection",
        collection_created_by: "@Martin janon",
        collection_user: collectionAdmin
    },
];

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

const Home = () => {
    return (
        <div className='min-h-screen bg-[#202835]'>

            <div className='max-w-[90%] mx-auto flex flex-col gap-[40px]'>
                <div className='max-w-[50%] mx-auto'>
                    <h1 className='m-0 text-center font-poppins font-bold text-[48px] text-[#F4FAEB]'>Discover & Collect Extraordinary Rare NFTs</h1>
                </div>
                <div className='grid grid-cols-5 '>
                    <div className='flex flex-col gap-[30px]'>
                        <p className='m-0 font-poppins font-medium text-[20px] text-[#F4FAEB]'>Digital marketplace for crypto
                            collectibles and non-fungible tokens
                            (NFT), Buy, sell, and discover
                            exclusive digital assets.</p>
                        <button className="w-full h-[48px] rounded-[12px] text-[20px] font-poppins font-medium text-[#44522F] bg-[#B7D487]">Discover</button>
                        <div>
                            <img
                                src={appStoreLogo}
                                alt="Logo"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                    <div className='col-span-3'></div>
                    <div className='flex justify-end'>
                        <div className='flex flex-col items-end gap-[20px]'>
                            <div className='leading-[1.2] text-center'>
                                <h2 className='m-0 font-poppins font-bold text-[36px] text-[#F4FAEB]'>42K +</h2>
                                <p className='m-0 font-poppins font-medium text-[20px] text-[#F4FAEB]'>User Active</p>
                            </div>
                            <div className='eading-[1.2] text-center'>
                                <h2 className='m-0 font-poppins font-bold text-[36px] text-[#F4FAEB]'>8K +</h2>
                                <p className='m-0 font-poppins font-medium text-[20px] text-[#F4FAEB]'>Artworks</p>
                            </div>
                            <div className='eading-[1.2] text-center'>
                                <h2 className='m-0 font-poppins font-bold text-[36px] text-[#F4FAEB]'>4K +</h2>
                                <p className='m-0 font-poppins font-medium text-[20px] text-[#F4FAEB]'>Artist</p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>

            <BrandsStrip />

            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col gap-[30px]'>
                    <h1 className='m-0 text-center font-poppins font-bold text-[40px] text-[#E7F1D7]'>Trending Actions</h1>
                    <CommonSlider
                        data={bidList}
                        slidesPerView={3}
                        renderItem={(bid) => (
                            <BidCard bid={bid} />
                        )}
                    />
                </div>

                <div className='flex flex-col gap-[30px]'>
                    <h1 className='m-0 text-center font-poppins font-bold text-[40px] text-[#E7F1D7]'>TOP NFT collection</h1>
                    <div className="grid grid-cols-3 gap-[15px]">
                        <TopCollectionCard />
                    </div>
                </div>
            </div>

            <div className='max-w-[90%] mx-auto'>
                <div className='flex flex-col gap-[30px]'>
                    <h1 className='m-0 text-center font-poppins font-bold text-[40px] text-[#E7F1D7]'>POPULAR COLLECTIONS</h1>
                    <CommonSlider
                        data={collectionList}
                        slidesPerView={3}
                        renderItem={(collection) => (
                            <CollectionCard collection={collection} />
                        )}
                    />
                </div>

                <div className='flex flex-col gap-[40px]'>
                    <div className='flex flex-col gap-[5px]'>
                        <h1 className='m-0 text-center font-poppins font-bold text-[40px] text-[#E7F1D7]'>Article sources</h1>
                        <p className='m-0 text-center font-poppins font-normal text-[28px] text-[#DBEAC3]'>NFT will open thousands of new opportunities for this new generation.</p>
                    </div>
                    <CommonSlider
                        data={articleList}
                        slidesPerView={3}
                        renderItem={(article) => (
                            <ArticleCard article={article} />
                        )}
                    />
                </div>
            </div>

            <div className='max-w-[95%] mx-auto relative px-[30px] rounded-[40px] bg-gradient-to-r from-[#373E4A] via-[#353B47] to-[#242C38] border-[2px] border-[#494F59]'>
                <div className='grid grid-cols-5 items-center'>
                    <div className='col-span-3 flex flex-col gap-[20px]'>
                        <h2 className='m-0 font-poppins font-bold text-[40px] text-[#E7F1D7]'>CREAT YOUR OWN NFT!</h2>
                        <p className='m-0 font-poppins font-normal text-[20px] text-[#DBEAC3]'>Unleash your creativity and bring your digital art to life! With our easy-to-use platform, you can design, mint, and showcase your unique NFTs. Join the revolution and start your journey in the exciting world of digital collectibles today!</p>
                        <button className="rounded-[10px] w-max px-[50px] py-[7px] font-poppins font-normal text-[20px] transition-all duration-300 text-[#4D323C] border border-[#E897B4] bg-[#E897B4] hover:text-[#E897B4] hover:bg-transparent">Get Started</button>
                    </div>
                    <div className='col-span-2'>
                        <img src={nftBannerImg} alt="Create NFT Banner Image" className='h-[400px] w-full object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home