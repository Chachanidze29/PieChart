import "./App.css";
import CustomForm from "./component/CustomForm/CustomForm.component";
import ItemsList from "./component/ItemsList/ItemsList.component";
import PieChart from "./component/PieChart/PieChart.component";

const App = () => {
  return (
    <div className="App">
      <CustomForm />
      <ItemsList />
      <PieChart />
    </div>
  );
};

export default App;
