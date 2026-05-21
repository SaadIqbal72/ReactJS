import logo from "../../assets/images/logo.svg"
import appStoreLogo from "../../assets/images/app-store-logo.png"
import searchIcon from "../../assets/images/search-icon.svg"

const Footer = () => {
    return (
        <div className="p-[30px] flex flex-col gap-[20px] bg-[#2F3642]">
            <div>
                <img src={logo} alt="Logo" className="w-auto h-[45px] object-contain" />
            </div>
            <div className="grid grid-cols-5">
                <div className="col-span-3 flex items-start justify-between">
                    <div className="flex flex-col gap-[10px]">
                        <h4 className="m-0 font-poppins font-semibold text-[20px] text-[#E7F1D7]">My Account</h4>
                        <ul className="list-inline m-0">
                            <li> <a href="" className="m-0 font-poppins font-normal text-[16px] text-[#E7F1D7]">Profile</a></li>
                            <li> <a href="" className="m-0 font-poppins font-normal text-[16px] text-[#E7F1D7]">Collections</a></li>
                            <li> <a href="" className="m-0 font-poppins font-normal text-[16px] text-[#E7F1D7]">Favourites</a></li>
                            <li> <a href="" className="m-0 font-poppins font-normal text-[16px] text-[#E7F1D7]">Settings</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h4 className="m-0 font-poppins font-semibold text-[20px] text-[#E7F1D7]">Resources</h4>
                        <ul className="list-inline m-0">
                            <li> <a href="" className="m-0 font-poppins font-normal text-[16px] text-[#E7F1D7]">Educational Article</a></li>
                            <li> <a href="" className="m-0 font-poppins font-normal text-[16px] text-[#E7F1D7]">Newsletter</a></li>
                            <li> <a href="" className="m-0 font-poppins font-normal text-[16px] text-[#E7F1D7]">Blog</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h4 className="m-0 font-poppins font-semibold text-[20px] text-[#E7F1D7]">Company</h4>
                        <ul className="list-inline m-0">
                            <li> <a href="" className="m-0 font-poppins font-normal text-[16px] text-[#E7F1D7]">About Us</a></li>
                            <li> <a href="" className="m-0 font-poppins font-normal text-[16px] text-[#E7F1D7]">Contacts</a></li>
                            <li> <a href="" className="m-0 font-poppins font-normal text-[16px] text-[#E7F1D7]">F.A.Q</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <h4 className="m-0 font-poppins font-semibold text-[20px] text-[#E7F1D7]">Most Visited Article</h4>
                        <ul className="list-inline m-0">
                            <li> <a href="" className="m-0 font-poppins font-normal text-[16px] text-[#E7F1D7]">Making NFT</a></li>
                            <li> <a href="" className="m-0 font-poppins font-normal text-[16px] text-[#E7F1D7]">types of NFT</a></li>
                            <li> <a href="" className="m-0 font-poppins font-normal text-[16px] text-[#E7F1D7]">What is web3?</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-span-2 flex justify-end">
                    <div className="relative px-[3px] w-[350px] h-max flex items-center rounded-[15px] overflow-hidden border border-[#454C57] bg-[#454C57]">
                        <input type="text" className="w-full  h-[50px]  border border-[#454C57] bg-[#454C57] !outline-none" />
                        <button className="min-w-max flex items-center gap-[10px] justify-between h-full px-[10px] h-[45px] font-poppins text-[16px] rounded-[15px] text-[#44522F] bg-[#B7D487]">
                            <img src={searchIcon} alt="Search Icon" className="w-[30px] h-[30px] object-contain" />Searcch</button>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#454C57]"></div>
            <div className="flex justify-between items-center w-full">
                <div className="max-w-[20%]">
                    <p className="m-0 font-poppins font-normal text-[20px] text-[#E7F1D7]">
                        The largest NFT Marketplace. Unique and authentic digital creations.
                        Made possible by blockchain technology.
                    </p>
                </div>
                <div className="flex justify-end max-w-[15%]">
                    <img
                        src={appStoreLogo}
                        alt="Logo"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    )
}


export default Footer