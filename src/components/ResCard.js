import {CDN_URL} from "../utils/constants.js"

const RestaurantCard = (props)=>{
   // console.log(props)
    const {resData} = props;
    const { name, cuisines, avgRating,sla, cloudinaryImageId  } = resData?.info
    return(
        // inline style object in jsx
        <div className="res-card" style={styleCard}> 
            <img className="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating } stars</h4>
            <h4>{sla.deliveryTime} min</h4>
        </div>
    )
}
const styleCard = {
    backgroundColor : "#f0f0f0"
}

export default RestaurantCard;
