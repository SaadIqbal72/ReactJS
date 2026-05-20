import BidCard from '../components/bid_card';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h1>Home</h1>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='m-0 text-center font-poppins font-bold text-[#fff]'>Trending Actions</h1>
                <div className="grid grid-cols-3 gap-[15px]">
                    <BidCard />
                </div>
            </div>
        </div>
    )
}

export default Home