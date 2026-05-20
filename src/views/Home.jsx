import BidCard from '../components/bid_card';
import CollectionCard from '../components/collection_card';
import ArticleCard from '../components/article_card';

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
            </div>
        </div>
    )
}

export default Home