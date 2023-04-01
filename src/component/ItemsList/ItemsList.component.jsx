import { useState } from 'react';

import './ItemsList.style.css';

const ItemsList = ({ items, onRemoveItem }) => {
    const [isHidden, setIsHidden] = useState(false);

    return (
        <div className='ItemsList'>
            <h1>Items List</h1>
            {
                (items.length !== 0 || isHidden) && (
                    <div className="ItemsWrapper">
                        {items.map(({ itemName, id }) => (
                            <div key={id} className="ItemWrapper">
                                <p>{ id }.</p>
                                <p>{ itemName }</p>
                                <button type="button" onClick={()=>onRemoveItem(id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default ItemsList;