import { useContext } from "../context/context";

import './PieChart.style.css';

const colors = [
    '#FF5733',
    '#2ECC71',
    '#3498DB',
    '#E74C3C',
    '#9B59B6'
];

const PieChart = () => {
    const { items } = useContext();
    const totalPercentage = items.reduce((total, item) => total + item.itemPercentage, 0);

    let startAngle = 0;

    return (
        <div className="PieChart">
            {items.map((item, index) => {
                const sliceAngle = (item.itemPercentage / totalPercentage) * 360;
                const sliceStyle = {
                    transform: `rotate(${startAngle}deg)`,
                    background: colors[index],
                };

                startAngle += sliceAngle;

                return (
                    <div
                        key={index}
                        className="PieSlice"
                        style={{
                            ...sliceStyle,
                            clipPath: `polygon(50% 50%, 100% 100%, 100% 0%)`,
                        }}
                    ></div>
                );
            })}
        </div>
    );
}

export default PieChart;