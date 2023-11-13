import ReactApexChart from "react-apexcharts";
import { IBusinessHealth } from "../../../../../redux/services/data/dataApi.interface";
import { useState, useEffect } from "react";
import { ApexOptions } from "apexcharts";

interface ChartDataPoint {
  x: string;
  y: number[];
  labels: string[];
}

export default function ChartAnalysis({
  businessData,
}: {
  businessData: IBusinessHealth[];
}) {
  const [options, setOptions] = useState<ChartDataPoint[] | []>([]);

  useEffect(() => {
    if (businessData?.length) {
      const modifiedData: ChartDataPoint[] = businessData?.map((data) => ({
        x: `${data.month}/${data.year.slice(2, 4)}`,
        y: [
          data.data?.income || 0,
          data.data?.expenses || 0,
          data.data?.debts || 0,
          data.data?.assets || 0,
          parseInt(data.health?.replace("%", "")) || 0,
        ],
        labels: ["Income", "Expenses", "Debts", "Assets", "Health"],
      }));
      setOptions(modifiedData);
    }
  }, [businessData]);

  const updatedLabels =
    options.length > 0
      ? options[0].labels.filter((label) => label !== "Health")
      : [];

  const incomeExpensesDebtsAssetsSeries =
    options.length > 0
      ? updatedLabels.map((label, index) => ({
          name: label,
          data: options.map((option) => option.y[index]),
        }))
      : [];

  const healthSeries =
    options.length > 0
      ? [
          {
            name: "Health",
            data: options.map((option) => Number(option.y[4])),
          },
        ]
      : [];

  const currentHealthData =
    options.length > 0 ? options[options.length - 1].y[4] : 0;

  const chartOptionsIncomeExpensesDebtsAssets: ApexOptions = {
    chart: {
      height: 400,
      type: "line",
    },
    xaxis: {
      categories: options.map((option) => option.x),
      title: {
        text: "Months",
      },
    },
    yaxis: {
      title: {
        text: "Values",
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#9d9dff", "#f4a24f", "#f44f4f", "#4ff4a2"],
    markers: {
      size: 6, 
      strokeWidth: 0, 
      hover: {
        size: 8,
      },
    },
    legend: {
      position: "top",
    },
  };

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
      categories: options.map((option) => option.x),
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
        currentHealthData < -45
          ? "#F15B46"
          : currentHealthData < 1
          ? "#FEB019"
          : currentHealthData <= 50
          ? "#9d9dff"
          : "#4ff4a2",
      ],
    },
    labels: [`${currentHealthData}%`],
    legend: {
      show: false,
    },
  };

  return (
    <div className="mt-10">
      <div className="bg-white p-2 pt-8 rounded-lg shadow-lg">
        <ReactApexChart
          options={chartOptionsIncomeExpensesDebtsAssets}
          series={incomeExpensesDebtsAssetsSeries}
          type="line"
          height={400}
        />
      </div>
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
              <span className="text-green-600 font-bold">0%-50%</span> indicates business is in a satisfactory state but facing challenges.
            </p>
            <p>
              <span className="text-yellow-500 font-bold">51%-100%</span> indicates the business is in a good state.
            </p>
            <p>
              <span className="text-red-600 font-bold">Less than 0%</span> indicates the business is high risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
