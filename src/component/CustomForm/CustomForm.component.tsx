import { FormEvent, useId, useState } from "react";
import "./CustomForm.style.css";
import { PieChartItem } from "../reducer/PieChart.reducer";
import { useContext } from "../context/context";

import { v4 as uuidv4 } from "uuid";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

const initialItem: PieChartItem = {
  itemName: "",
  itemPercentage: 0,
  id: "",
};

const CustomForm = () => {
  const [item, setItem] = useState(initialItem);
  const [error, setError] = useState("");

  const { handleAddItem, percentageSum } = useContext();

  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!item.itemName || !item.itemPercentage) return;
    if (percentageSum + Number(item.itemPercentage) > 100) {
      setError("Percentage sum shouldn't be higher than 100");
      setTimeout(() => {
        setError("");
      }, 5000);
      setItem(initialItem);
      return;
    }

    const id = uuidv4();

    handleAddItem({ ...item, id });
    setItem(initialItem);
  };

  return (
    <form className="FormContainer">
      {error && (
        <Alert onClose={() => setError("")} severity="error">
          {error}
        </Alert>
      )}
      <TextField
        name="itemName"
        label="Items Name"
        variant="outlined"
        onChange={handleChange}
        value={item.itemName}
        color="success"
      />
      <TextField
        name="itemPercentage"
        type="number"
        label="Items Percentage"
        variant="outlined"
        value={item.itemPercentage}
        onChange={handleChange}
        color="success"
      />
      <Button
        type="button"
        variant="outlined"
        color="success"
        onClick={handleSubmit}
      >
        Add Item
      </Button>
    </form>
  );
};

export default CustomForm;
