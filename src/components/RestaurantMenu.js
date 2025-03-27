// import { useEffect , useState } from "react"; do not need this as moved to custom hooks
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RestaurantCard_API } from "../utils/constants.js"
import useRestaurantMenu from "./useRestaurantMenu.js"


const RestaurantMenu = ()=>{
   // const [resInfo, setResInfo] = useState(null);
    const { resID } = useParams();

    const resInfo = useRestaurantMenu(resID);
   
    // useEffect(()=>{
    //     fetchMenu();
    // },[]);
// const fetchMenu = async ()=>{
//     const data = await fetch(RestaurantCard_API+resID)

//     const json = await data.json();
//     console.log(json);
//     setResInfo(json);

// }

if(resInfo === null) return <Shimmer/>;
const { name
    ,cuisines
    ,costForTwoMessage
    ,cloudinaryImageId } = resInfo?.data?.cards[2]?.card?.card?.info ;
    //console.log(resInfo?.data?.cards[4].groupedCard.cardGroupMap.);
const { itemCards } = resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
// console.log(resInfo?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards);
console.log(itemCards);




    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(',')}</h2>
            <h2>{costForTwoMessage}</h2>
            <img alt="menu-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+cloudinaryImageId}></img>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>{
                  return  <li key={item.card.info.id}>{item.card.info.name}- Rs.{item.card.info.price/100}</li>
                })}
                
            </ul>
        </div>
    )
    };

export default RestaurantMenu;