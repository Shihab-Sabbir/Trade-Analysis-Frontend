import { IBusinessHealth } from "../../../../../redux/services/data/dataApi.interface";
import HealthChart from "./charts/HealthChart";
import IndicatorChart from "./charts/IndicatorChart";
import StatusChart from "./charts/StatusChart";



export default function ChartAnalysis({
  businessData,
}: {
  businessData: IBusinessHealth[];
}) {
  return (
    <div className="mt-10">
      <div className="bg-white p-2 pt-8 rounded-lg shadow-lg">
       <StatusChart businessData={businessData}/>
      </div>
      <div className="bg-white p-2 pt-8 rounded-lg shadow-lg">
       <IndicatorChart businessData={businessData}/>
      </div>
      <HealthChart businessData={businessData}/>
    </div>
  );
}
