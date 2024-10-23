import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu=()=>{

    const{resId}=useParams();

    const resInfo=useRestaurant(resId);

    const [showIndex,setShowIndex]=useState(0);
    
    if(resInfo===null){
        return <Shimmer></Shimmer>
    }
    const{name,areaName,costForTwoMessage,cloudinaryImageId,cuisines}=resInfo?.data?.cards[2]?.card?.card?.info;
    const{itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card?.card;
    // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold ">{cuisines.join(",")} - {resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
            {categories.map((category,index)=>(
                <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card}
                showItems={index===showIndex? true :false}
                setShowIndex={()=>setShowIndex(index)}/>
            ))}
        </div>
    )
}
export default RestaurantMenu;