import { ApexOptions } from "apexcharts";
import { ChartDataPoint } from "../../types/interface";
import { calculateHealth } from "../../utils/transformData";
import { IBusinessHealth } from "../../../../../../redux/services/data/dataApi.interface";
import ReactApexChart from "react-apexcharts";

export default function HealthChart({
  businessData,
}: {
  businessData: IBusinessHealth[];
}) {
  const healthChartData: ChartDataPoint[] | [] = calculateHealth(businessData);
  const currentHealthData =
    healthChartData.length > 0
      ? healthChartData[healthChartData.length - 1].y[0]
      : 0;
  const healthSeries =
    businessData.length > 0
      ? [
          {
            name: healthChartData[0].labels[0],
            data: healthChartData.map((option) => option.y[0]),
          },
        ]
      : [];

  const chartOptionsHealth: ApexOptions = {
    chart: {
      height: 400,
      type: "bar",
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [
            {
              from: -100,
              to: -46,
              color: "#F15B46",
            },
            {
              from: -45,
              to: 0,
              color: "#FEB019",
            },
            {
              from: 1,
              to: 50,
              color: "#9d9dff",
            },
            {
              from: 51,
              to: 100,
              color: "#4ff4a2",
            },
          ],
        },
        columnWidth: "50%",
      },
    },
    xaxis: {
      categories: healthChartData.map((option) => option.x),
      title: {
        text: "Months",
      },
    },
    yaxis: {
      title: {
        text: "Health",
      },
    },
    series: healthSeries,
    legend: {
      position: "top",
    },
  };

  const semiDonutChartOptions: ApexOptions = {
    chart: {
      height: 400,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5, // margin is in pixels
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
          },
        },
      },
    },
    fill: {
      colors: [
        currentHealthData > 0 && currentHealthData <= 20
        ? "#F15B46"
        : currentHealthData > 20 && currentHealthData <= 50
        ? "#9d9dff"
        : currentHealthData > 50
        ? "#4ff4a2"
        : "#f4a24f", 
      ],
    },
    labels: [`${currentHealthData}%`],
    legend: {
      show: false,
    },
  };

  return (
    <div className="mt-8 flex lg:items-start lg:justify-between flex-col lg:flex-row gap-8">
      <div className="bg-white p-2 pt-8 rounded-lg shadow-lg w-full max-w-[800px]">
        <ReactApexChart
          options={chartOptionsHealth}
          series={healthSeries}
          type="bar"
          height={400}
        />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg min-w-[400px]">
        <p className="text-center text-lg font-bold">Current Health State</p>
        <ReactApexChart
          options={semiDonutChartOptions}
          series={[currentHealthData]}
          type="radialBar"
          height={500}
        />
        <div>
          <p>
            <span className="text-red-600 font-bold">0% - 20%</span> indicates
            the business is high risk.
          </p>
          <p>
            <span className="text-green-600 font-bold">21%-50%</span> indicates
            business is in a satisfactory state but facing challenges.
          </p>
          <p>
            <span className="text-yellow-500 font-bold">51%-100%</span>{" "}
            indicates the business is in a good state.
          </p>
        </div>
      </div>
    </div>
  );
}
