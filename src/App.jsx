import { useReducer } from 'react';
import CustomForm from './component/CustomForm/CustomForm.component';
import PieChart from './component/PieChart/PieChart.component';
import ItemsList from './component/ItemsList/ItemsList.component';

import './App.css';

const reducer = (items, action) => {
    switch (action.type) {
        case 'add': {
            return [...items, {
                id: action.id,
                itemName: action.item.itemName,
                itemPercentage: action.item.itemPercentage
            }]
        }
        case 'remove': {
            return items.filter((item)=> item.id !== action.itemId)
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialItems = [];
let itemId = 1;

const App = () => {
    const [items, dispatch] = useReducer(reducer, initialItems);

    const handleAddTask = (item) => {
        dispatch({
            type: 'add',
            id: itemId++,
            item: item
        });
    }

    const handleRemoveTask = (id) => {
        dispatch({
            type: 'remove',
            itemId: id
        });
    }

    return (
        <div className='App'>
            <CustomForm onAddItem={handleAddTask} />
            <ItemsList items={items} onRemoveItem={handleRemoveTask} />
            <PieChart items={items} />
        </div>
    )
}

export default App;