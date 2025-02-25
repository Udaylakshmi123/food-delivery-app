import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import RestCard, { withPromotedLabel } from "./RestCard";
import UserContext from "../utils/userContext";
// body component
const SubComponent = () => {
  // local state variable- super powerful variable
  const [listOfResturants, setListOfResturants] = useState([]);
  const [filteredOfResturants, setFilteredOfResturants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);
  const RestCardPromoted = withPromotedLabel(RestCard);
  useEffect(() => {
    fetchData();
  },[]);
  // to get list of resturants from server
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=Dindigul%20Thalappakatti&trackingId=undefined&submitAction=ENTER&queryUniqueId=1443a16d-ca39-d3db-8d51-2ca5cbfe2a6b"
    );
    const json = await data.json();
    setListOfResturants(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
        ?.card?.card?.restaurants
    );
    setFilteredOfResturants(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
        ?.card?.card?.restaurants
    );
  };

  return (
    <div className="body">
      <div className="filter flex">
        <div className="px-6">
          <input
            type="text" data-testid="searchInput"
            className="border border-solid border-black rounded p-1"
            placeholder="Search Resturants"
            value={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)} />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredData = listOfResturants.filter((val) => {
                return val.info.name
                  .toLowerCase()
                  .includes(searchTxt.toLowerCase());
              });
              setFilteredOfResturants(filteredData);
            }}>Search</button>
        </div>
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              setFilteredOfResturants(listOfResturants.filter(
                (val) => val.info.avgRating > 4.3
              ));
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search p-4 flex items-center">
          <label>UserName: </label>
          <input
            type="text"
            value={loggedInUser}
            className="boder border-black p-2"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {
         filteredOfResturants.map(resturant => (
          <Link to={"/restaurants/" + resturant.info.id} key={resturant.info.id}>
            {
            (resturant?.info?.promoted) ? <RestCardPromoted restDetails={resturant} />
            : <RestCard restDetails={resturant} />
            }
          </Link>
         ))
        }
      </div>
    </div>
  );
};

export default SubComponent;
