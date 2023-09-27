import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import {  useSelector } from "react-redux";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement
);

const ToursDetails = () => {
  const bookedTours = useSelector((state) => state.bookingData.data);
  const users = useSelector((state) => state.usersData.data);
  const currentYear=new Date().getFullYear();
  const dates=[]
  bookedTours.map(item=>item.allSelectedDays.map(item2=>item2.split("-")[0]==currentYear && dates.push(item2.split("-")[1])));
  console.log(dates);

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const test={
    Jan:0,
    "Feb":0,
    "Mar":0,
    "Apr":0,
    "May":0,
    "Jun":0,
    "Jul":0,
    "Aug":0,
    "Sep":0,
    "Oct":0,
    "Nov":0,
    "Dec":0,
  }
  dates.map(item=>test[item]+=1)
  console.log(Object.values(test));
  const data2 = {
    labels: labels,
    datasets: [
      {
        label: "Booking Dates",
        data: Object.values(test),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(201, 203, 207, 0.5)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 87, 81, 76, 75, 73,90,67,65],
        fill: false,
        borderColor: "#3E3E8A",
        tension: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="booked-tours-users-charts">
      <div className="booked-tours-chart">
        <h4>Users Report</h4>
        <p>
          The total number of sessions within the date range. It is the period
          time a user is actively engaged with your website, page or app, etc
        </p>
        <Line data={data} options={options} />
      </div>
      <div className="users-chart">
        <h4>Booking Report</h4>
        <p>
          The total number of sessions within the date range. It is the period
          time a user is actively engaged with your website, page or app, etc
        </p>
        <Bar data={data2} />
      </div>
    </div>
  );
};

export default ToursDetails;
