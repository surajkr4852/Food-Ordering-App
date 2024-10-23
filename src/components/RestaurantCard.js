import {CDN_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestaurantCard=(props)=>{

    const {resData}=props;

    const {loggedInUser}=useContext(UserContext);
    return(
        <div className="rounded-lg m-4 p-4 w-[220px] h-[500px] bg-slate-100 hover:bg-slate-200">
            <img className="rounded-lg m-1 p-1 w-[200px] h-[200px]" src={CDN_URL+resData.info.cloudinaryImageId}></img>
            <h3 className="font-bold py-4">{resData.info.name}</h3>
            <h3 className="whitespace-normal break-words overflow-hidden">{resData.info.cuisines.join(",")}</h3>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.avgRating} Stars</h4>
            <h4>{resData.info.sla.deliveryTime} Minutes</h4>
            <h4>User : {loggedInUser}</h4>
        </div>
    )
}

//Higher Order Component
// Input -> Restaurant Card
// Output -> ResTaurant card with delivery time <= 20 min

export const withDeliveryTime=(RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-1 p-1 rounded-md">Fast Delivery</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;