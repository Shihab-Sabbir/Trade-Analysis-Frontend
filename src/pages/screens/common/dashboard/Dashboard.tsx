import { useEffect, useState } from "react";
import { useGetAllBusinessDataQuery } from "../../../../redux/services/data/dataApi";
import { IBusinessHealth } from "../../../../redux/services/data/dataApi.interface";
import CardHolder from "./components/CardHolder";
import ChartAnalysis from "./components/ChartAnalysis";
import LoadingScreen from "../../../../components/loaders/LoadingScreen";

export default function Dashboard() {
  const [businessData, setBusinessData] = useState<IBusinessHealth[] | []>([]);
  const { data, isLoading } = useGetAllBusinessDataQuery(undefined,{
    refetchOnMountOrArgChange:true
  });

  useEffect(() => {
    if (data?.data) {
      setBusinessData(data.data);
    }
  }, [data]);


  if(isLoading){
    return <LoadingScreen/>
  }

  return (
    <div>
      <CardHolder businessData={businessData}/>
      <ChartAnalysis businessData={businessData}/>
    </div>
  );
}
