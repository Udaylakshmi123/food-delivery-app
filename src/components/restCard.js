import {CDN_LINKS} from '../utils/constants';
const RestCard =(props) =>{
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo, sla:{deliveryTime:deliveryTime} } = props?.restDetails?.info;
    return (
        <div className='rest-card'>
           <img className='rest-img' src={CDN_LINKS + cloudinaryImageId} />
           <h4>{name}</h4>
           <p>{cuisines.join(', ')}</p>
           <h6 style={{margin: '0px'}}>{avgRating} Stars</h6>
           <h6>{costForTwo}</h6>
           <h6 style={{margin: '0px'}}> {deliveryTime} mins</h6>
        </div>
    )
}

export default RestCard;