import './ItemsList.style.css';
import { useContext } from '../context/context';
import { PieChartItem } from '../reducer/PieChart.reducer';
import Item from '../Item/Item.component';


const ItemsList = () => {
    const { items } = useContext();

    return (
        <div className='ItemsList'>
            {
                items.length !== 0 && (
                    <div className="ItemsWrapper">
                        {items.map((item: PieChartItem) => (
                            <Item id={item.id} itemName={item.itemName} itemPercentage={item.itemPercentage} />
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default ItemsList;
