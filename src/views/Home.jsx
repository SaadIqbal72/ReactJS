import BidCard from '../components/bid_card';
import CollectionCard from '../components/collection_card';
import ArticleCard from '../components/article_card';
import TopCollectionCard from '../components/top_collection_card';
import nftBannerImg from "../assets/images/create-nft-banner-img.svg"

const Home = () => {
    return (
        <div className='min-h-screen bg-[#202835]'>
            <div className='max-w-7xl mx-auto'>
                <h1>Home</h1>

                <div className='flex flex-col gap-[30px]'>
                    <h1 className='m-0 text-center font-poppins font-bold text-[40px] text-[#E7F1D7]'>Trending Actions</h1>
                    <div className="grid grid-cols-3 gap-[15px]">
                        <BidCard />
                    </div>
                </div>

                <div className='flex flex-col gap-[30px]'>
                    <h1 className='m-0 text-center font-poppins font-bold text-[40px] text-[#E7F1D7]'>TOP NFT collection</h1>
                    <div className="grid grid-cols-3 gap-[15px]">
                        <TopCollectionCard />
                    </div>
                </div>

                <div className='flex flex-col gap-[30px]'>
                    <h1 className='m-0 text-center font-poppins font-bold text-[40px] text-[#E7F1D7]'>POPULAR COLLECTIONS</h1>
                    <div className="grid grid-cols-3 gap-[15px]">
                        <CollectionCard />
                    </div>
                </div>

                <div className='flex flex-col gap-[40px]'>
                    <div className='flex flex-col gap-[5px]'>
                        <h1 className='m-0 text-center font-poppins font-bold text-[40px] text-[#E7F1D7]'>Article sources</h1>
                        <p className='m-0 text-center font-poppins font-normal text-[28px] text-[#DBEAC3]'>NFT will open thousands of new opportunities for this new generation.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-[15px]">
                        <ArticleCard />
                    </div>
                </div>

                <div className='relative px-[30px] rounded-[40px] bg-gradient-to-r from-[#373E4A] via-[#353B47] to-[#242C38] border-[2px] border-[#494F59]'>
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
        </div>
    )
}

export default Home