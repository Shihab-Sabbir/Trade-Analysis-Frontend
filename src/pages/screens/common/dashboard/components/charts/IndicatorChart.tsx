import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { IBusinessHealth } from "../../../../../../redux/services/data/dataApi.interface";
import { ChartDataPoint } from "../../types/interface";
import { transformDataForIndicatorChart } from "../../utils/transformData";

export default function IndicatorChart({
  businessData,
}: {
  businessData: IBusinessHealth[];
}) {
  const indicatorChartData: ChartDataPoint[] | [] = transformDataForIndicatorChart(businessData);
console.log({indicatorChartData})
  type SeriesData = { name: string; data: number[] };

  const indicatorSeries: SeriesData[] = businessData.length > 0
    ? (indicatorChartData?.reduce((acc, label) => {
        label.labels.forEach((seriesLabel, index) => {
          if (!acc[index]) {
            acc[index] = {
              name: seriesLabel,
              data: [],
            };
          }
          acc[index].data.push(label.y[index]);
        });
        return acc;
      }, [] as SeriesData[]) as SeriesData[])
    : [];

  const chartOptions: ApexOptions = {
    chart: {
      height: 400,
      type: "line",
    },
    xaxis: {
      categories: indicatorChartData.map((option) => option.x),
      title: {
        text: "Months",
      },
    },
    yaxis: {
      title: {
        text: "Values",
      },
    },
    colors: ["#9d9dff", "#f4a24f", "#f44f4f", "#4ff4a2"],
        markers: {
          size: 6, 
          strokeWidth: 0, 
          hover: {
            size: 8,
          },
        },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    // Customize other chart options as needed
  };

  return (
    <ReactApexChart
      options={chartOptions}
      series={indicatorSeries}
      type="line"
      height={400}
    />
  );
}
