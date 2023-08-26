
export type PieChartItem = {
    id: number
    itemName: string,
    itemPercentage: number
}

export type AddAction = {
    type: 'add',
    payload: {
        item: PieChartItem
    }
}

export type RemoveAction = {
    type: 'remove',
    payload: {
        itemId: number
    }
}

export type Action = AddAction | RemoveAction;

export const initialItems: PieChartItem[] = [];

export const pieChartReducer = (items: PieChartItem[], action: Action) => {
    switch (action.type) {
        case 'add': {
            const { item } = action.payload;

            const totalPercentage = items.reduce((total, item) => total + item.itemPercentage, 0) + item.itemPercentage;
            if (totalPercentage > 100) {
                alert("Sum of percentages shouldn't be more than 100");
                return items;
            }

            if (items.length > 5) {
                alert("Items Length shouldn't be higher than 5");
                return items;
            }

            return [...items, {
                id: item.id,
                itemName: item.itemName,
                itemPercentage: item.itemPercentage
            }]
        }
        case 'remove': {
            return items.filter((item) => item.id !== action.payload.itemId)
        }
        default: {
            throw Error('Unknown action');
        }
    }
}

export default pieChartReducer;
