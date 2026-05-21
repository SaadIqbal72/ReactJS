import collectionAdmin from "../assets/images/collection-admin.svg";
import collectionImg1 from "../assets/images/collection-img-1.svg"
import collectionImg2 from "../assets/images/collection-img-2.svg"
import collectionImg3 from "../assets/images/collection-img-3.svg"
import collectionImg4 from "../assets/images/collection-img-4.svg"
import collectionImg5 from "../assets/images/collection-img-5.svg"




const CollectionCard = ({ collection }) => {
    const images = Object.values(collection.collection_images);
    console.log(collection);
    console.log(images);

    return (
        <div className="p-[15px] flex flex-col gap-[5px] rounded-[24px] bg-[#2F3642]">
            <div className="grid grid-cols-3 gap-[10px]">
                {
                    images.map((img, index) => (
                        <img key={index} src={img} alt={`Collection ${index + 1}`} className={`
                            h-[120px] w-full object-cover rounded-[5px]
                            ${index === 1 ? "col-span-2" : ""}
                        `} />
                    ))
                }
            </div>
            <div className="flex items-center gap-[10px]">
                <img src={collection.collection_user} alt="User" className="w-[72px] h-[72px] rounded-[5px] border border-[#fff]" />
                <div>
                    <p className="m-0 text-[14px] font-poppins font-normal text-[#E7F1D7]">{collection.collection_title}</p>
                    <p className="m-0 text-[12px] font-poppins font-normal text-[#D2D4D7]">Created by <span className="text-[#C17E96]"> :{collection.collection_created_by}</span></p>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard