import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestMenu from "../utils/useRestMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import ResCategory from "./ResCategory";
const RestMenuComponent = () =>{
    const [showRestIndex, setShowRestIndex] = useState(0);
    const {resId} = useParams();
    const resInfo = useRestMenu(resId);
    const onlineStatus = useOnlineStatus();
    if(!onlineStatus) return <h1>Looks your Wbsite is offline</h1>;
    if(resInfo === null) return <Shimmer />;
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    return (<div className="text-center">
       <h1 className="font-bold my-6 text-2xl">{name}</h1>
       <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
       {
       categories.map((category,index)=> <ResCategory key={category?.card?.card?.categoryId} data={category?.card?.card}
        showItems={index === showRestIndex ? true : false}
        setShowRestIndex={()=>setShowRestIndex(index)}/>)
       }
    </div>)
}
export default RestMenuComponent