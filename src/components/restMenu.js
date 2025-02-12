import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router";

const RestMenuComponent = () =>{
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId)
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async()=>{
        const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&query=Biryani&submitAction=ENTER`);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
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