import { useState } from "react";

import './CustomForm.style.css';

const initialItem = {
    itemName: '',
    itemPercentage: 0
};

const CustomForm = ({ onAddItem }) => {
    const [item, setItem] = useState(initialItem);

    const handleChange = e => {
        const { name, value } = e.target;
        setItem({
            ...item,
            [name]: value
        });
    }

    const handleSubmit = () => {
        setItem(initialItem);
        onAddItem(item);
    }

    return (
        <form className="FormContainer">
            <input className="InputWrapper" onChange={handleChange} value={item.itemName}
                name="itemName" type="text" placeholder="Enter Item's Name" />
            <input className="InputWrapper" onChange={handleChange} value={item.itemPercentage}
                name="itemPercentage" type="number" placeholder="Enter Item's Percentage" />

            <button type="button" onClick={handleSubmit}>Add</button>
        </form>
    )
}

export default CustomForm;