import { PropsWithChildren, useReducer } from "react";
import pieChartReducer, {
  PieChartItem,
  initialState,
} from "../reducer/PieChart.reducer";
import { createContext } from "./createContext";
import { addAction, removeAction } from "../reducer/PieChart.action";

type PieChartContextState = {
  items: PieChartItem[];
  percentageSum: number;
  handleAddItem: (item: PieChartItem) => void;
  handleRemoveItem: (id: string) => void;
};

export const [useContext, ContextProvider] =
  createContext<PieChartContextState>();

export const PieChartProvider = ({ children }: PropsWithChildren) => {
  const [{ items, percentageSum }, dispatch] = useReducer(
    pieChartReducer,
    initialState
  );

  const handleAddItem = (item: PieChartItem) => {
    dispatch(addAction(item));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeAction(id));
  };

  return (
    <ContextProvider
      value={{ items, percentageSum, handleAddItem, handleRemoveItem }}
    >
      {children}
    </ContextProvider>
  );
};

export default PieChartProvider;
