import { useState, useEffect } from "react";
import styles from "./LineChart.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

export default function LineChart() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "1980",
        "1985",
        "1990",
        "1995",
        "2000",
        "2005",
        "2010",
        "2015",
        "2020",
      ],
      datasets: [
        {
          label: "Extent, million km2",
          data: [12.5, 13, 12, 12.2, 11.5, 10.2, 11, 10, 10.5],
          borderColor: "rgb(123, 208, 255)",
          backgroundColor: "rgba(192, 232, 255, 0.5)",
          fill: false,
        },
      ],
    });

    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Changes in Arctic Sea Ice, 1980-2020",
        },
      },
      responsive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: "Year",
          },
        },
        y: {
          display: true,
          title: {
            display: true,
          },
        },
      },
    });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </>
  );
}
