import { useContext } from "../context/context";
import { PieChartItem } from "../reducer/PieChart.reducer";

export const Item = ({ id, itemName, itemPercentage }: PieChartItem) => {
    const { handleRemoveItem } = useContext();

    return (
        <div key={id} className="ItemWrapper">
            <p>{id}.</p>
            <p>{itemName}</p>
            <p>{itemPercentage}%</p>
            <button type="button" onClick={() => handleRemoveItem(id)}>Remove</button>
        </div>
    )
}

export default Item;
