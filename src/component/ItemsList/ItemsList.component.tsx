import { useState } from 'react';

import './ItemsList.style.css';
import { useContext } from '../context/context';


const ItemsList = () => {
    const [isHidden, setIsHidden] = useState(false);
    const { items, handleRemoveItem } = useContext();

    return (
        <div className='ItemsList'>
            {
                (items.length !== 0 || isHidden) && (
                    <div className="ItemsWrapper">
                        {items.map(({ itemName, id, itemPercentage }) => (
                            <div key={id} className="ItemWrapper">
                                <p>{id}.</p>
                                <p>{itemName}</p>
                                <p>{itemPercentage}%</p>
                                <button type="button" onClick={() => handleRemoveItem(id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default ItemsList;