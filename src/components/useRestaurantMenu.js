import { useEffect,useState } from "react";
import { RestaurantCard_API } from "../utils/constants.js"

const useRestaurantMenu = (resID)=>{
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu()
    },[]);

    const fetchMenu = async ()=>{
       // console.log(resID);
        const data = await fetch(RestaurantCard_API+resID)
    
        const json = await data.json();
        //console.log(json);
        setResInfo(json);
    
    }
    return resInfo;
}
export default useRestaurantMenu;