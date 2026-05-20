import ethreumIcon from "../assets/images/ethereum_clipart.svg";
import nftImage from "../assets/images/nft-1.svg"

const BidCard = () => {
    return (

        <div className="p-[15px] flex flex-col gap-[15px] rounded-[24px] bg-[#2F3642]">
            <div className="rounded-[15px] overflow-hidden h-[300px] border-[2px] border-[#444]">
                <img src={nftImage} alt="NFT Image" className="w-full h-full" />
            </div>

            <h6 className="m-0 font-poppins font-medium text-[22px] text-[#fff]">Inner portrait #3425</h6>
            <div className="flex items-center justify-between">
                <h6 className="m-0 font-poppins text-[18px] text-[#fff]">
                    <span className="font-normal">Creat by: </span>
                    <span className="inline-block font-semibold text-[#B7D487]">Martin Lora</span>
                </h6>
                <div className="flex flex-col">
                    <div className="flex items-center gap-[5px]">
                        <img src={ethreumIcon} alt="" className="w-[28px] h-[28px] object-cover" />
                        <p className="m-0 font-poppins font-medium text-[16px] text-[#fff]">15.25</p>
                    </div>
                    <h6 className="m-0 font-poppins font-medium text-[14px] text-[#8F939A]">Highest Bid</h6>
                </div>
            </div>
            <div className="flex gap-[10px]">
                <button className="w-[60%] h-[48px] rounded-[12px] text-[20px] font-poppins font-medium text-[#44522F] bg-[#B7D487]">Place a bid</button>
                <div className="w-[40%] h-[48px] flex items-center justify-center rounded-[12px] text-[20px] font-poppins font-medium border text-[#E897B4] border-[#E897B4]">10 : 03 : 12</div>
            </div>
        </div>

    )
}

export default BidCard