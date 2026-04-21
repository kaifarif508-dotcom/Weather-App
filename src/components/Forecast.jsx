import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const Forecast = ({result}) => {
  const forecastDay = result?.forecast?.forecastday?.[0]?.hour || [];
  if (!forecastDay) {
  return <p>Loading...</p>;
}
const hours = result?.forecast?.forecastday?.[0]?.hour ;
if(!hours || hours.length === 0){
  return <p>Loading...</p>
}
const labels = hours.slice(7, 17).map((h) =>
  new Date(h.time).getHours() + ":00"
);
const temps = hours.slice(7, 17).map((h) => h.temp_c);
  const data = {
    labels:labels,
    datasets: [
      {
        data: temps,
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        tension: 0.4,
        pointRadius: 3,
      },
      {
        // red points
        data: [null, null, null, 18, 30, null, null, null, null, null],
        backgroundColor: "red",
        pointRadius: 5,
        showLine: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 👈 important for h-60
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        min: 0,
        max: 45,
        ticks: {
          callback: (v) => v + "°",
        },
      },
    },
  };

  return (
    <div className="w-full p-4 bg-white shadow-md h-60 rounded-2xl">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Hourly Forecast</h3>
        <span className="text-xs text-gray-500">{result.location?.name}</span>
      </div>

      <div className="h-[calc(100%-30px)]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Forecast;