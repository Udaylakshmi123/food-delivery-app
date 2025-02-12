import RestCard from './restCard';
import { useEffect, useState } from 'react';
import Shimmer from './shimmer';
import { Link } from 'react-router';
// body component
const SubComponent = () =>{
    // local state variable- super powerful variable
    let [listOfResturants, setListOfResturants] = useState([]);
    let [filteredOfResturants, setFilteredOfResturants] = useState([]);
    let [searchTxt, setSearchTxt] = useState('');
    useEffect(()=>{
       fetchData();
    },[]);
   // to get list of resturants from server
    const fetchData = async ()=>{
        const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=Dindigul%20Thalappakatti&trackingId=undefined&submitAction=ENTER&queryUniqueId=1443a16d-ca39-d3db-8d51-2ca5cbfe2a6b');
        const json = await data.json();
        setListOfResturants(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants);
        setFilteredOfResturants(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants);
    }
    // conditional rendering
    if(listOfResturants?.length === 0){
        return <Shimmer />
    }
    // or return listOfResturants?.length === 0 ? <Shimmer /> : ()
    return (
        <div className='body'>
           <div className='filter'>
            <div className='search'><input type='text' placeholder='Search Resturants' value={searchTxt} onChange={(e)=>setSearchTxt(e.target.value)}></input>
            <button onClick={()=>{
                const filteredData = listOfResturants.filter(val=> {
                   return val.info.name.toLowerCase().includes(searchTxt.toLowerCase())
                })
                setFilteredOfResturants(filteredData)
                }}>Search</button></div>
            <button className='filter-btn' onClick={()=>
            {
                filteredOfResturants = listOfResturants.filter(val=>val.info.avgRating > 4.3);
                setFilteredOfResturants(filteredOfResturants);
            }}>Top Rated Restaurants</button>
           </div>
           <div className='rest-container'>
            {
                filteredOfResturants.map(val=> 
                <Link to={'/restaurants/'+val.info.id}><RestCard key={val.info.id}  restDetails={val} /></Link>)
            }
           </div>
        </div>
    )
    }

export default SubComponent;    