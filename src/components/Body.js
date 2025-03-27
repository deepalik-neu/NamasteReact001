import resList from "../utils/mockData.js"
import RestaurantCard from "./ResCard.js"
import { useState , useEffect } from "react"
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus.js";


const Body = () => {

   // console.log(resList);
   const [listOfRestarants, setListOfRestarants] = useState([]);
   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
   const [searchText, setSearchText] = useState("");
   
//    useEffect(()=>{
//     console.log("use effect"); // then this
//    })
//    // this will be rendered first
//    console.log("Body rendered");

 const  fetchData = async ()=>{
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5082486&lng=73.8440548&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
   // console.log();
    setListOfRestarants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
};
        useEffect(()=>{
            fetchData();
        },[])

        //Conditional Rendering
        // if(listOfRestarants.length === 0){
        //     return <Shimmer></Shimmer>;
        // }

       const onlineStatus =  useOnlineStatus();
       if(onlineStatus === false) return <h1>Looks like you are offline!</h1>

    return listOfRestarants.length === 0? (<Shimmer></Shimmer>):(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={
                    ()=>{
                        console.log(listOfRestarants);
                        const filtered = listOfRestarants.filter((res)=>( res.info.avgRating > 4.4)
                           
                        )
                        setListOfRestarants(filtered);
                    }
                    }>Top Rated Restaurant</button>
           
                <div className="search">
                    <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button className="btnSearch" onClick={
                        ()=>{
                            const filtered = listOfRestarants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filtered);
                        }}>
                            Search
                    </button>
                </div>
            </div>
            <div className="res-container">
                {filteredRestaurant.map(restaurant=>
                    <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>
                )
}
                
            </div>
        </div>
    )
}

export default Body;