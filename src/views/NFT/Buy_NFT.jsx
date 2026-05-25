import { Link } from "react-router-dom"

const BuyNFT = () => {
    return (
        <div className='min-h-screen p-[50px] bg-[#202835]'>
            <div className="relative">
                {/* <img src={ } alt="Create NFT Banner" className="w-full h-[500px] object-cover" /> */}
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                    <h1 className="m-0 text-[40px] font-poppins font-bold text-[#E897B4]">Create NFT</h1>
                    <p className="m-0 text-[20px] font-poppins font-normal text-[#E7F1D7]">Unleash your creativity and bring your digital art to life! With our easy-to-use platform, you can design, mint, and showcase your unique NFTs. Join the revolution and start your journey in the exciting world of digital collectibles today!</p>
                    <div className="flex items-center justify-center gap-[20px]">
                        <Link to="/nft/create" className="w-[60%] h-[48px] rounded-[12px] text-[20px] font-poppins font-medium text-[#44522F] bg-[#B7D487]">Create</Link>
                        <Link to="/nft/explore" className="w-[60%] h-[48px] rounded-[12px] text-[20px] font-poppins font-medium text-[#44522F] bg-[#B7D487]">Explore</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[50px]">
                <h1 className="m-0 text-[40px] font-poppins font-bold text-[#E897B4]">How to Make an NFT ?</h1>
                <div className="flex flex-col gap-[20px]">
                    <h4 className="m-0 text-[26px] font-poppins font-medium text-[#E897B4]">1. Pick your item</h4>
                    <p className="m-0 text-[20px] font-poppins font-normal text-[#E7F1D7]">Let's start with the basics. If you haven't already done so, you'll need to determine what unique digital asset you want to turn into an NFT. It can be a custom painting, picture, music, video game collectible, meme, GIF, or even a tweet. An NFT is a unique digital item with a sole owner. That rarity gives an NFT value. Make sure that you own the intellectual property rights to the item you want to turn into an NFT. Creating an NFT for a digital asset you don't own could get you into legal trouble.</p>

                    <h4 className="m-0 text-[26px] font-poppins font-medium text-[#E897B4]">2. Choose your blockchain</h4>
                    <p className="m-0 text-[20px] font-poppins font-normal text-[#E7F1D7]">Once you've selected your unique digital asset, it's time to start the process of minting it into an NFT. That begins by determining the blockchain technology you intend to use for your NFT. The most popular among NFT artists and creators is Ethereum (ETH -0.33%). Other popular options include Tezos, Polkadot, Cosmos, and Binance Smart Chain.</p>

                    <h4 className="m-0 text-[26px] font-poppins font-medium text-[#E897B4]">3. Set up your digital wallet</h4>
                    <p className="m-0 text-[20px] font-poppins font-normal text-[#E7F1D7]">If you don't already have a digital wallet, you'll want to set one up to create your NFT since you'll need some cryptocurrency to fund your initial investment. The wallet will provide you with access to your digital assets. The top NFT wallets include Metamask, Math Wallet, AlphaWallet, Trust Wallet, and Coinbase Wallet.</p>
                    <p className="m-0 text-[20px] font-poppins font-normal text-[#E7F1D7]">Once you set up your digital wallet, you'll want to buy some cryptocurrency. Most NFT platforms accept Ether, the cryptocurrency of the Ethereum blockchain platform. If you already own some cryptocurrency elsewhere, you'll want to connect it to your digital wallet so you can use it to create and sell NFTs.</p>

                    <h4 className="m-0 text-[26px] font-poppins font-medium text-[#E897B4]">4. Select your NFT marketplace</h4>
                    <p className="m-0 text-[20px] font-poppins font-normal text-[#E7F1D7]">Once you have a digital wallet and some cryptocurrency, it's time to start creating (and, hopefully, selling) your NFT. For that, you'll need to choose an NFT marketplace. Some of the top NFT marketplaces include OpenSea, Axie Marketplace, Larva Labs/CryptoPunks, NBA Top Shot Marketplace, Rarible, SuperRare, Foundation, Nifty Gateway, Mintable, and ThetaDrop.</p>
                    <p className="m-0 text-[20px] font-poppins font-normal text-[#E7F1D7]">You'll need to research each NFT marketplace to find a platform that's a good fit for your NFT. For example, Axie Marketplace is the online shop for the top NFT game Axie Infinity. Meanwhile, NBA Top Shot is a basketball-focused marketplace. It's also important to note that some marketplaces require their own cryptocurrency. Rarible, for example, requires Rarible (RARI 0.92%). </p>
                    <p className="m-0 text-[20px] font-poppins font-normal text-[#E7F1D7]">OpenSea is usually a good place to start. It allows you to mint your own NFT, and it's a leader in NFT sales. The NFT marketplace sold $3.4 billion worth of NFTs in August 2021 alone. </p>
                    <p className="m-0 text-[20px] font-poppins font-normal text-[#E7F1D7]">After selecting your NFT marketplace, you'll need to connect it to your digital wallet. That will allow you to pay the necessary fees to mint your NFT and hold any sales proceeds.</p>
                </div>
            </div>
        </div>
    )
}
export default BuyNFT