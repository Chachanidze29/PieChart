import { useContext } from "../context/context";

import { PieChart as MuiPieChart } from "@mui/x-charts/PieChart";

import "./PieChart.style.css";

const PieChart = () => {
  const { items } = useContext();

  const transformedItems = items.map(({ id, itemName, itemPercentage }) => ({
    id,
    value: itemPercentage,
    label: itemName,
  }));

  return (
    <div className="PieChartWrapper">
      <MuiPieChart
        series={[
          {
            data: transformedItems,
          },
        ]}
        width={600}
        height={400}
      />
    </div>
  );
};

export default PieChart;
