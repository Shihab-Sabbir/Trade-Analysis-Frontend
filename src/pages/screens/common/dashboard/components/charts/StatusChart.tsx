import ReactApexChart from "react-apexcharts";
import { IBusinessHealth } from "../../../../../../redux/services/data/dataApi.interface";
import { transformDataForStatusChart } from "../../utils/transformData";
import { ApexOptions } from "apexcharts";
import { ChartDataPoint } from "../../types/interface";

export default function StatusChart({
    businessData,
  }: {
    businessData: IBusinessHealth[];
  }) {
    const statusChartData:ChartDataPoint[] | [] = transformDataForStatusChart(businessData);
    
    type SeriesData = { name: string; data: number[] };

    const incomeExpensesDebtsAssetsSeries: SeriesData[] = businessData.length > 0
      ? (statusChartData?.reduce((acc, label) => {
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
    
      const chartOptionsIncomeExpensesDebtsAssets: ApexOptions = {
        chart: {
          height: 400,
          type: "line",
        },
        xaxis: {
          categories: statusChartData.map((option) => option.x),
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

  return (
    <ReactApexChart
    options={chartOptionsIncomeExpensesDebtsAssets}
    series={incomeExpensesDebtsAssetsSeries}
    type="line"
    height={400}
  />
  )
}
