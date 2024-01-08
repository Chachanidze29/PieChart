export type PieChartItem = {
  id: string;
  itemName: string;
  itemPercentage: number;
};

export type AddAction = {
  type: "add";
  payload: {
    item: PieChartItem;
  };
};

export type RemoveAction = {
  type: "remove";
  payload: {
    itemId: string;
  };
};

export type State = {
  percentageSum: number;
  items: PieChartItem[];
};

export type Action = AddAction | RemoveAction;

export const initialState = {
  percentageSum: 0,
  items: [],
};

export const pieChartReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add": {
      return {
        ...state,
        percentageSum:
          Number(state.percentageSum) +
          Number(action.payload.item.itemPercentage),
        items: [...state.items, action.payload.item],
      };
    }
    case "remove": {
      const item = state.items.find(
        (item) => item.id === action.payload.itemId
      );

      return {
        ...state,
        percentageSum: item
          ? Number(state.percentageSum) - Number(item.itemPercentage)
          : 0,
        items: state.items.filter((item) => item.id !== action.payload.itemId),
      };
    }
    default: {
      throw Error("Unknown action");
    }
  }
};

export default pieChartReducer;
