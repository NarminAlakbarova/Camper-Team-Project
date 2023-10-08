import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Slider from "react-slick";
import { useSelector } from "react-redux";
ChartJS.register(ArcElement, Tooltip, Legend);
const DetailsReports = () => {
  const toursData = useSelector((state) => state.toursData.data);
  const bookedToursData = useSelector((state) => state.userBooking.data);
  const newsData = useSelector((state) => state.newsData.data);
  const colorData = [
    {
      backgroundColor: "#0D6EFD",
      width: "70%",
      name: "Illions",
      count: "713",
    },
    {
      backgroundColor: "#FFC107",
      width: "20%",
      name: "Washington",
      count: "583",
    },
    {
      backgroundColor: "#DC3545",
      width: "90%",
      name: "Mississippi",
      count: "924",
    },
    {
      backgroundColor: "#0DCAF0",
      width: "60%",
      name: "California",
      count: "664",
    },
    {
      backgroundColor: "#0D6EFD",
      width: "30%",
      name: "Maryland",
      count: "560",
    },
    {
      backgroundColor: "#DC3545",
      width: "80%",
      name: "Alaska",
      count: "793",
    },
  ];
  
  const leftChartData = () => {
    return colorData.map((item, index) => (
      <div className="details-group" key={index}>
        <p className="country">{item.name}</p>
        <div className="bg-color">
          <div
            className="color"
            style={{ backgroundColor: item.backgroundColor, width: item.width }}
          ></div>
        </div>
        <p>{item.count}</p>
      </div>
    ));
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const chartData = {
    labels: ["tours", "news", "bookedTours"],
    datasets: [
      {
        data: [toursData.length, newsData.length, bookedToursData.length],
        backgroundColor: ["#057AFF", "#4B49AC", "#FFC100"],
        hoverOffset: 4,
      },
    ],
  };
  const options1 = {
    responsive: true,
    maintainAspectRatio: false,
    id: "chart-1",
    plugins: {
      legend: {
        display: false,
      },
    },
    borderWidth: 0,
    cutout: 58,
  };

  return (
    <div style={{ width: "90%", paddingLeft: "30px" }}>
      <Slider {...settings}>
        <div className="details-slider">
          <div className="details-report-left">
            <div className="details-info">
              <h5>Detailed Booking</h5>
              <p className="count">
                $
                {bookedToursData.reduce(
                  (acc, curr) => acc + (curr?.tourPrice || 0),
                  0
                )}
              </p>
              <p className="country">Total booking price</p>
              <p className="info">
                The total number of sessions within the date range. It is the
                period time a user is actively engaged with your website, page
                or app, etc
              </p>
            </div>
            <div className="details-chart">{leftChartData()}</div>
          </div>
          <div className="details-report-right">
            <div className="doughnt-chart">
              <Pie data={chartData} options={options1} />
              <div className="doughnut-center">
                <p className="center-text">
                  {toursData.length + newsData.length + bookedToursData.length}
                </p>
              </div>
            </div>
            <div className="chart-content">
              <div className="chart-group">
                <div className="chart-group-left">
                  <div
                    className="color"
                    style={{ backgroundColor: "#057AFF" }}
                  ></div>
                  <p>All Tours</p>
                </div>
                <p>{toursData.length}</p>
              </div>
              <div className="chart-group">
                <div className="chart-group-left">
                  <div
                    className="color"
                    style={{ backgroundColor: "#2E2CAF" }}
                  ></div>
                  <p>News</p>
                </div>
                <p>{newsData.length}</p>
              </div>
              <div className="chart-group">
                <div className="chart-group-left">
                  <div
                    className="color"
                    style={{ backgroundColor: "#E6AC00" }}
                  ></div>
                  <p>BookedTours</p>
                </div>
                <p>{bookedToursData.length}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="details-slider">
          <div className="details-report-left">
            <div className="details-info">
              <h5>Detailed Reports</h5>
              <p className="count">$28040</p>
              <p className="country">North America</p>
              <p className="info">
                The total number of sessions within the date range. It is the
                period time a user is actively engaged with your website, page
                or app, etc
              </p>
            </div>
            <div className="details-chart">{leftChartData()}</div>
          </div>
          <div className="details-report-right">
            <div className="doughnt-chart">
              <Pie data={chartData} options={options1} />
              <div className="doughnut-center">
                <p className="center-text">76</p>
              </div>
            </div>
            <div className="chart-content">
              <div className="chart-group">
                <div className="chart-group-left">
                  <div
                    className="color"
                    style={{ backgroundColor: "#057AFF" }}
                  ></div>
                  <p>All Tours</p>
                </div>
                <p>{toursData.length}</p>
              </div>
              <div className="chart-group">
                <div className="chart-group-left">
                  <div
                    className="color"
                    style={{ backgroundColor: "#2E2CAF" }}
                  ></div>
                  <p>News</p>
                </div>
                <p>{newsData.length}</p>
              </div>
              <div className="chart-group">
                <div className="chart-group-left">
                  <div
                    className="color"
                    style={{ backgroundColor: "#E6AC00" }}
                  ></div>
                  <p>BookedTours</p>
                </div>
                <p>{bookedToursData.length}</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default DetailsReports;
