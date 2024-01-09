import "./ItemsList.style.css";
import { useContext } from "../context/context";
import { PieChartItem } from "../reducer/PieChart.reducer";
import Item from "../Item/Item.component";
import { useState } from "react";

const ItemsList = () => {
  const [showItems, setShowItems] = useState(false);

  const { items } = useContext();

  const toggleDropDown = () => {
    setShowItems((prevState) => !prevState);
  };

  return (
    items.length > 0 && (
      <div className="ItemsList">
        {showItems ? (
          <div className="ArrowsWrapper">
            <h2>Hide Items</h2>
            <i onClick={toggleDropDown} className="UpArrow" />
          </div>
        ) : (
          <div className="ArrowsWrapper">
            <h2>Show Items</h2>
            <i onClick={toggleDropDown} className="DownArrow" />
          </div>
        )}

        {showItems && (
          <div className="ItemsWrapper">
            {items.map((item: PieChartItem, index: number) => (
              <Item
                key={item.id}
                id={item.id}
                index={String(index)}
                itemName={item.itemName}
                itemPercentage={item.itemPercentage}
              />
            ))}
          </div>
        )}
      </div>
    )
  );
};

export default ItemsList;
