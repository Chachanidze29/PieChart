import { useReducer } from 'react';
import './App.css';
import pieChartReducer, { PieChartItem, initialItems } from './component/reducer/PieChart.reducer';
import CustomForm from './component/CustomForm/CustomForm.component';
import ItemsList from './component/ItemsList/ItemsList.component';
import PieChart from './component/PieChart/PieChart.component';

const App = () => {
    const [items, dispatch] = useReducer(pieChartReducer, initialItems);

    const handleAddTask = (item: PieChartItem) => {
        dispatch({
            type: 'add',
            payload: {
                item
            }
        });
    }

    const handleRemoveTask = (id: number) => {
        dispatch({
            type: 'remove',
            payload: {
                itemId: id
            }
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