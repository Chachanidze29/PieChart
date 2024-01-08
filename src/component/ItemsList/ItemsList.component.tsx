import "./ItemsList.style.css";
import { useContext } from "../context/context";
import { PieChartItem } from "../reducer/PieChart.reducer";
import Item from "../Item/Item.component";

const ItemsList = () => {
  const { items } = useContext();

  return (
    <div className="ItemsList">
      {items.length !== 0 && (
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
  );
};

export default ItemsList;
