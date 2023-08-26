export const initialItems = [];

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

export const pieChartReducer = (items: PieChartItem[], action: Action) => {
    switch (action.type) {
        case 'add': {
            return [...items, {
                id: action.payload.item.id,
                itemName: action.payload.item.itemName,
                itemPercentage: action.payload.item.itemPercentage
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