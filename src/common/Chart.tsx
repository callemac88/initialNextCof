import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  title: {
    display: true,
    text: "category",
    fontSize: 20,
  },
  legend: {
    display: true,
    position: "right",
  },
};

export const Chart = ({ chartData }) => {
  return (
    <>
      <Bar type="bar" data={chartData} options={options} />
    </>
  );
};
