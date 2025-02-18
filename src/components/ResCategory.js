import CategoryListItem from "./CategoryListItem";
const ResCategory = ({ data, showItems, setShowRestIndex }) => {
  const handleClick = () => {
    setShowRestIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-6 ">
        <div className="flex justify-between cursor-pointer"
          onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "⬆" : "⬇"}</span>
        </div>
        {showItems && <CategoryListItem items={data.itemCards} />}
      </div>
    </div>
  );
};
export default ResCategory;
