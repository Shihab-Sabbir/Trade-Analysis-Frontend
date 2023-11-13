import { IBusinessHealth } from "../../../../../redux/services/data/dataApi.interface";
import { months } from "../../businessData/constants/constant";
import { ChartDataPoint } from "../types/interface";

export const transformDataForStatusChart = (
  businessData: IBusinessHealth[]
): ChartDataPoint[] | [] => {
  if (businessData?.length) {
    const modifiedData: ChartDataPoint[] = businessData?.map((data) => ({
      x: `${months[Number(data.month) as number].slice(0, 3)}/${data.year.slice(
        2,
        4
      )}`,
      y: [
        data.data?.income || 0,
        data.data?.expenses || 0,
        data.data?.debts || 0,
        data.data?.assets || 0,
      ],
      labels: ["Income", "Expenses", "Debts", "Assets"],
    }));
    return modifiedData;
  } else {
    return [];
  }
};

export const transformDataForIndicatorChart = (
  businessData: IBusinessHealth[]
): ChartDataPoint[] | [] => {
  if (businessData?.length) {
    const modifiedData: ChartDataPoint[] = businessData?.map((data) => ({
      x: `${months[Number(data.month) as number].slice(0, 3)}/${data.year.slice(
        2,
        4
      )}`,
      y: [
        parseFloat(
          data?.currentRatio !== undefined ? data.currentRatio.toFixed(2) : "0"
        ) || 0,
        parseFloat(
          data?.quickRatio !== undefined ? data.quickRatio.toFixed(2) : "0"
        ) || 0,
        parseFloat(
          data?.debtToEquityRatio !== undefined
            ? data.debtToEquityRatio.toFixed(2)
            : "0"
        ) / 1000 || 0,
        parseFloat(
          data?.netProfitMargin !== undefined
            ? data.netProfitMargin.toFixed(2)
            : "0"
        ) || 0,
      ],
      labels: [
        "Current Ratio",
        "Quick Ratio",
        "Debt to Equity Ratio",
        "Net Profit Margin",
      ],
    }));
    return modifiedData;
  } else {
    return [];
  }
};

export const calculateHealth = (
  businessData: IBusinessHealth[]
): ChartDataPoint[] | [] => {
  if (businessData?.length) {
    const modifiedData: ChartDataPoint[] = businessData?.map((data) => ({
      x: `${months[Number(data.month) as number].slice(0, 3)}/${data.year.slice(
        2,
        4
      )}`,
      y: [parseInt(data.health?.replace("%", "")) || 0],
      labels: ["Health"],
    }));
    return modifiedData;
  } else {
    return [];
  }
};
