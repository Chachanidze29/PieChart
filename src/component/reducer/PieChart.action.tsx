import { AddAction, PieChartItem, RemoveAction } from "./PieChart.reducer";

export const addAction = (item: PieChartItem): AddAction => ({
  type: "add",
  payload: {
    item,
  },
});

export const removeAction = (itemId: string): RemoveAction => ({
  type: "remove",
  payload: {
    itemId,
  },
});
