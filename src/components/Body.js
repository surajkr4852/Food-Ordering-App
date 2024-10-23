import RestaurantCard,{ withDeliveryTime } from "./RestaurantCard"
import resList from "../utils/mockData"
import Shimmer from "./Shimmer"
import { Link ,useParams} from "react-router-dom";
import { useEffect, useState ,useContext} from "react"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body=()=>{
    const[listOfRestaurant,setListOfRestaurant]=useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);
    const length=filteredRestaurant.length;
    const[searchText,setSearchText]=useState("");

    const RestaurantCardDeliveryTime=withDeliveryTime(RestaurantCard);

    const{loggedInUser,setUserName}=useContext(UserContext);

    const{resId}=useParams();
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.34495971205777&lng=85.82206040511511&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        // console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return(
            <h1>Looks like you are offline! Please check your Internet Connection</h1>
        )
    }
    return length===0? <Shimmer/>: (
        <div className="body">
            <div className="flex justify-evenly items-center">
                <div className="flex w-6/12">
                    <input type="text" placeholder="Search Restaurant" className="m-4 h-6 w-9/12 border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
                    <button className="my-2 p-1 border-4 border-indigo-200 border-t-indigo-500 rounded-md" onClick={()=>{
                        const searchRes=listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(searchRes);
                    }}>Search</button>
                </div>
                <div className="flex items-center">
                    <button className="h-8 bg-gray-200 text-gray-800 font-medium px-3 rounded-md hover:bg-gray-300 transition duration-200 ease-in-out" onClick={()=>{
                        const filteredList=listOfRestaurant.filter((res)=>res.info.avgRating>=4.5);
                        setFilteredRestaurant(filteredList);
                    }}>
                        Top Rated Restaurant
                    </button>

                    <div>
                        <label>User Name:</label>
                        <input placeholder="ABCDE" className="border border-black p-2"
                            value={loggedInUser}
                            onChange={(e)=>setUserName(e.target.value)}
                        ></input>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-wrap justify-between">
                {filteredRestaurant.map((restaurant)=>
                <Link 
                key={restaurant.info.id}
                to={"/restaurant/"+restaurant.info.id}>
                {restaurant.info.sla.deliveryTime <=20 ? 
                <RestaurantCardDeliveryTime resData={restaurant}/> :
                <RestaurantCard  resData={restaurant}/>}
                </Link>
                )}
            </div>
        </div>
    )
}
export default Body;