import { useState, useEffect } from "react";

const useRestMenu = (resId)=>{
    const [resInfo, setResInfo] = useState(null);
    // fetch
      useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async()=>{
        const data = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&query=Biryani&submitAction=ENTER`);
        const json = await data.json();
        setResInfo(json.data);
    }
 return resInfo;
}
export default useRestMenu;