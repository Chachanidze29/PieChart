import { PropsWithChildren, useReducer } from "react";
import pieChartReducer, { PieChartItem, initialItems } from "../reducer/PieChart.reducer";
import { createContext } from "./createContext";
import { addAction, removeAction } from "../reducer/PieChart.action";

type PieChartContextState = {
    items: PieChartItem[],
    handleAddItem: (item: PieChartItem) => void,
    handleRemoveItem: (id: number) => void
}

export const [useContext, ContextProvider] = createContext<PieChartContextState>();

export const PieChartProvider = ({ children }: PropsWithChildren) => {
    const [items, dispatch] = useReducer(pieChartReducer, initialItems);

    const handleAddItem = (item: PieChartItem) => {
        dispatch(addAction(item));
    }

    const handleRemoveItem = (id: number) => {
        dispatch(removeAction(id));
    }

    return (
        <ContextProvider value={{ items, handleAddItem, handleRemoveItem }}>
            {children}
        </ContextProvider>
    )
}

export default PieChartProvider;
