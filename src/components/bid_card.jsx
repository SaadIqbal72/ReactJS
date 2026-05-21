import ethreumIcon from "../assets/images/ethereum_clipart.svg";
import ClockCountdown from "./counter/clock_countdown";

const BidCard = ({ bid }) => {
    return (
        <div className="p-[15px] flex flex-col gap-[15px] rounded-[24px] bg-[#2F3642]">
            
            <div className="rounded-[15px] overflow-hidden h-[330px] border-[2px] border-[#454C57]">
                <img
                    src={bid.bid_image}
                    alt="NFT Image"
                    className="w-full h-full object-cover"
                />
            </div>
            <h6 className="m-0 font-poppins font-medium text-[22px] text-[#fff]">
                {bid.bid_title}
            </h6>
            <div className="flex items-center justify-between">
                <h6 className="m-0 font-poppins text-[18px] text-[#fff]">
                    <span className="font-normal">Create by: </span>
                    <span className="inline-block font-semibold text-[#B7D487]">
                        {bid.bid_created_by}
                    </span>
                </h6>
                <div className="flex flex-col">
                    <div className="flex items-center gap-[5px]">
                        <img
                            src={ethreumIcon}
                            alt="Ethereum Icon"
                            className="w-[28px] h-[28px] object-cover"
                        />
                        <p className="m-0 font-poppins font-medium text-[16px] text-[#fff]">
                            {bid.bid_highest}
                        </p>
                    </div>
                    <h6 className="m-0 font-poppins font-medium text-[14px] text-[#8F939A]">
                        Highest Bid
                    </h6>
                </div>
            </div>
            <div className="flex gap-[10px]">
                <button className="w-[60%] h-[48px] rounded-[12px] text-[20px] font-poppins font-medium text-[#44522F] bg-[#B7D487]">
                    Place a bid
                </button>
                <div className="w-[40%] h-[48px] flex items-center justify-center rounded-[12px] text-[20px] font-poppins font-medium border text-[#E897B4] border-[#E897B4]">
                    <ClockCountdown bidCounter={bid.bid_counter} />
                </div>
            </div>
        </div>
    );
};

export default BidCard;