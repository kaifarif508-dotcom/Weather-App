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

const Forecast = ({ result }) => {

  const hours = result?.forecast?.forecastday?.[0]?.hour || [];

  if (!hours.length) {
    return (
      <p className="text-sm text-center text-gray-500">
        Loading forecast...
      </p>
    );
  }

  // 🔥 single slice (optimized)
  const slicedHours = hours.slice(7, 17);

  const labels = slicedHours.map((h) =>
    new Date(h.time).getHours() + ":00"
  );

  const temps = slicedHours.map((h) => h.temp_c);

  const data = {
    labels,
    datasets: [
      {
        data: temps,
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        tension: 0.4,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          maxRotation: 0,
          autoSkip: true,
          font: { size: 10 },
        },
      },
      y: {
        min: 0,
        max: 45,
        ticks: {
          callback: (v) => v + "°",
          font: { size: 10 },
        },
        grid: {
          color: "#f3f4f6",
        },
      },
    },
  };

  return (
    <div className="w-full p-3 bg-white shadow-md sm:p-4 rounded-2xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold sm:text-base">
          Hourly Forecast
        </h3>

        <span className="text-xs text-gray-500 sm:text-sm">
          {result?.location?.name ?? "—"}
        </span>
      </div>

      {/* Chart */}
      <div className="w-full h-44 sm:h-52 md:h-60">
        <Line data={data} options={options} />
      </div>

    </div>
  );
};

export default Forecast;