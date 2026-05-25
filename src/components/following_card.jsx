import userImage from "../assets/images/app-store-logo.png"
import discardIcon from "../assets/images/cart-icon.svg"

const FollowingCard = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center justify-between gap-[15px]">
                <img src={userImage} alt="User Image" className="w-[65px] h-[65px] object-contain rounded-full" />
                <p className="m-0 text-[16px] font-poppins text-[#E7F1D7]">Henry Morgan</p>
            </div>
            <div className="flex items-center justify-between gap-[15px]">
                <button>See profile</button>
                <img src={discardIcon} alt="Discard Icon" className="w-[30px] h-[30px] object-contain" />
            </div>
        </div>
    )
}

export default FollowingCard