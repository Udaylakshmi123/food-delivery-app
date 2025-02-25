import { useDispatch } from "react-redux";
import { CDN_LINKS } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const CategoryListItem = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) =>{
    // Dispatch an Action
    dispatch(addItem(item));
  }
  return (
    <div>
      {
      items.map((item) => (
        <div key={item.card.info.id} data-testid="fooditems"
          className="border-b-2 p-2 m-2 border-gray-200 flex justify-between">
          <div className="text-left w-9/12">
            <h2 className="font-bold py-2">{item.card.info.name}</h2>
            <h2 className="font-bold">
              ₹{item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </h2>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button className="bg-white hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-4 border border-green-500 hover:border-transparent rounded" onClick={()=>handleAddItem(item)}>
                ADD</button>
            </div>
            <img className="w-26 h-auto rounded-lg"
              src={CDN_LINKS + item.card.info.imageId} />
          </div>
        </div>
      ))
      }
    </div>
  );
};
export default CategoryListItem;
