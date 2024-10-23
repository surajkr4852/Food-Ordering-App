import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
const ItemList=({items})=>{

    const dispatch=useDispatch()
    const handleAddItem=(item)=>{
        //Dispatch an action
        dispatch(addItem(item)); 
    }

    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id}
                    className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹{item.card.info.finalPrice? item.card.info.finalPrice/100: item.card.info.price/100}</span>
                        </div>
                        <p className="text-xs">
                            {item.card.info.description}
                        </p>
                    </div>
                    <div>
                        <div className="absolute">
                            <button className="p-2 shadow-lg mx-5 rounded-md text-white bg-black"
                                onClick={()=>handleAddItem(item)}>
                                Add+
                            </button>
                        </div>
                        <img src={CDN_URL+item.card.info.imageId} className="w-28"></img>
                    </div>

                </div>
            ))}
        </div>
    )
}
export default ItemList;