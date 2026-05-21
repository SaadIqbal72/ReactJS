import binanceIcon from "../assets/images/binance-icon.svg"

const BrandsStrip = () => {
    const brands = [
        {
            brand_icon: binanceIcon,
            brand_title: "Binance"
        },
        {
            brand_icon: binanceIcon,
            brand_title: "Meta Mask"
        },
        {
            brand_icon: binanceIcon,
            brand_title: "Bitget Wallet"
        },
        {
            brand_icon: binanceIcon,
            brand_title: "Tonkeeper"
        },
        {
            brand_icon: binanceIcon,
            brand_title: "Uniswap"
        },
        {
            brand_icon: binanceIcon,
            brand_title: "Exadus"
        },
    ]

    return (
        <div className="bg-[#2F3642]">
            <div className="flex items-center justify-between w-[80%] mx-auto p-[10px]">
                {brands.map((brand, index) => (
                    <div key={index} className="flex items-center gap-[10px]">
                        <img src={brand.brand_icon} alt={brand.brand_title} className="w-[50px] h-[50px] object-contain" />
                        <p className='m-0 text-center font-poppins font-medium text-[20px] text-[#B7D487]'>{brand.brand_title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default BrandsStrip