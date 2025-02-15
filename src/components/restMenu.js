import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestMenu from '../utils/useRestMenu';
import useOnlineStatus from '../utils/useOnlineStatus';
const RestMenuComponent = () =>{
    // const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    const resInfo = useRestMenu(resId);
    const onlineStatus = useOnlineStatus();
    if(!onlineStatus) return <h1>Looks your Wbsite is offline</h1>
    console.log(onlineStatus)
    if(resInfo === null) return <Shimmer />;
    const {name, cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    return (<div>
       <h1>{name}</h1>
       <h2>{cuisines.join(', ')} - {costForTwoMessage}</h2>
       <ul>
        {
            itemCards.map(item=> <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price / 100}</li>)
        }
       </ul>
    </div>)
}
export default RestMenuComponent