import { useContext } from "react";
import {CDN_LINKS} from "../utils/constants";
import UserContext from "../utils/userContext";
const RestCard =(props) =>{
    const contData = useContext(UserContext);
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo, sla:{deliveryTime:deliveryTime} } = props?.restDetails?.info;
    return (
        <div className="m-4 p-4 w-[220px] rounded-lg bg-gray-50 hover:bg-gray-400">
           <img className="rounded-lg" src={CDN_LINKS + cloudinaryImageId} />
           <h4 className="font-bold py-4 text-lg">{name}</h4>
           <p>{cuisines.join(", ")}</p>
           <h6 style={{margin: "0px"}}>{avgRating} Stars</h6>
           <h6>{costForTwo}</h6>
           <h6 style={{margin: "0px"}}> {deliveryTime} mins</h6>
           <h6>User: <b>{contData.loggedInUser}</b></h6>
        </div>
    )
}

// Higher ordered component

// input-> RestCard and output->RestcardPromoted

export const withPromotedLabel =(RestCard) =>{
    return (props)=>{
        return(<div>
            <label className="absolute bg-black text-white m-2 p-1 rounded-lg">Promoted</label>
            <RestCard {...props}/>
        </div>)
    }
}

export default RestCard;