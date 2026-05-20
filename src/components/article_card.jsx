import eyeIcon from "../assets/images/eye-icon.svg";
import articleImg from "../assets/images/article-img.svg"
import collectionImg2 from "../assets/images/collection-img-2.svg"
import collectionImg3 from "../assets/images/collection-img-3.svg"
import collectionImg4 from "../assets/images/collection-img-4.svg"
import collectionImg5 from "../assets/images/collection-img-5.svg"

const ArticleCard = () => {
    return (
        <div className="p-[15px] flex flex-col gap-[30px] rounded-[24px] bg-[#2F3642]">
            <div className="w-full h-[320px] rounded-t-[30px] overflow-hidden">
                <img src={articleImg} alt="Article Image" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-[10px]">
                <p className="m-0 text-[24px] font-poppins font-semibold text-[#E7F1D7]">The Best NFT blockchains</p>
                <p className="m-0 text-[18px] font-poppins font-normal text-[#E7F1D7]">Do you know the right NFT blockchain for you? It may be strange; But anyone can choose a different blockchain to operate in the world of different tokens. Currently, more than ten blockchain networks support NFTs; But in which of these networks you can succeed, it depends on the type of activity and your goals.</p>
                <div className="flex items-center justify-between">
                    <p className="m-0 text-[20px] font-poppins font-medium text-[#E897B4]">read more</p>
                    <div className="flex items-center gap-[3px]">
                        <p className="m-0 text-[12px] font-poppins font-normal text-[#D2D4D7]"> Nov 17, 2023</p>
                        <p className="m-0 text-[12px] font-poppins font-normal text-[#D2D4D7]">8K</p>
                        <img src={eyeIcon} alt="h-[16px] w-[16px] object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard