import { useContext } from "../context/context";
import { PieChartItem } from "../reducer/PieChart.reducer";

import Button from "@mui/material/Button";

export type PieChartItemProps =
  | PieChartItem & {
      index: string;
    };

export const Item = ({
  id,
  itemName,
  itemPercentage,
  index,
}: PieChartItemProps) => {
  const { handleRemoveItem } = useContext();

  return (
    <div className="ItemWrapper">
      <p>{index}.</p>
      <p>{itemName}</p>
      <p>{itemPercentage}%</p>
      <Button
        type="button"
        variant="outlined"
        color="success"
        onClick={() => handleRemoveItem(id)}
      >
        Remove
      </Button>
    </div>
  );
};

export default Item;
