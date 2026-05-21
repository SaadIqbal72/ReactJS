import topCollectionImg from "../assets/images/top-collection-img-1.svg"
import greyHeartIcon from "../assets/images/heart-grey.svg"
import pinkHeartIcon from "../assets/images/heart-pink.svg"

const TopCollectionCard = () => {
    return (
        <div className="p-[15px] flex flex-col gap-[30px] rounded-[24px] bg-[#2F3642]">
            <div className="w-full h-[320px] rounded-t-[30px] overflow-hidden">
                <img src={topCollectionImg} alt="Article Image" className="h-full w-full object-cover" />
            </div>
            <div className="relative flex flex-col text-center gap-[15px]">
                <div className="absolute bottom-full left-0 right-0 mx-auto w-[65px] h-[65px] flex items-center justify-center rounded-full border-[5px] border-[#2f3642] bg-[#B7D487]">
                    <img src={greyHeartIcon} alt="Like Icon" className="w-[32px] h-[32px] object-contain" />
                    <img src={pinkHeartIcon} alt="Like Icon" className="w-[32px] h-[32px] object-contain hidden" />
                </div>
                <p className="m-0 text-[20px] font-poppins font-medium text-[#FAEAF0]">Digital Decade</p>
                <p className="m-0 text-[15px] font-poppins font-medium text-[#FAEAF0]">by. Anthoy gragasz</p>
                <div className="flex justify-center">
                    <button className="rounded-[10px] w-[90%] py-[7px] font-poppins font-normal text-[20px] transition-all duration-300 text-[#FAEAF0] border border-[#FAEAF0] hover:bg-[#FAEAF0] hover:text-[#2f3642]">3.45 ETH</button>
                </div>
            </div>
        </div>
    )
}

export default TopCollectionCard