import { FormEvent, useState } from "react";

import './CustomForm.style.css';
import { PieChartItem } from "../reducer/PieChart.reducer";

const initialItem: PieChartItem = {
    itemName: '',
    itemPercentage: 0,
    id: 0
};

type CustomFormProps = {
    onAddItem: (item: PieChartItem) => void
}

const CustomForm = ({ onAddItem }: CustomFormProps) => {
    const [item, setItem] = useState(initialItem);

    const handleChange = (e: FormEvent) => {
        const { name, value } = (e.target as HTMLInputElement);
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