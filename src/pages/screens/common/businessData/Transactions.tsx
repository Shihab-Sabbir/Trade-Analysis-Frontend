import { useState, useEffect } from "react";
import Table from "antd/es/table";
import { useGetAllBusinessDataQuery } from "../../../../redux/services/data/dataApi";
import dataTable from "./utils/dataTable";
import Page from "../../../../components/pageWrapper/Page";

import AddDataModal from "./AddDataModal";
import { App } from "antd";
import { IBusinessHealth } from "../../../../redux/services/data/dataApi.interface";
import LoadingScreen from "../../../../components/loaders/LoadingScreen";

export default function Transactions() {
  const [businessData, setBusinessData] = useState<IBusinessHealth[]>([]);
  const { message } = App.useApp();
  const { data, isLoading, isSuccess, error } = useGetAllBusinessDataQuery(
    undefined,
    {
      refetchOnMountOrArgChange: true,
    }
  );


  useEffect(() => {
    if (data?.data?.length) {
      setBusinessData(dataTable.getData(data.data));
    }
  }, [data]);

  useEffect(() => {
    if (isSuccess) {
      message.success(data && 'message' in data && data?.message || "User created successfully !")
    }
    if(error){
      message.error(error && 'data' in error && error?.data?.message || 'Something went wrong')
    }
  }, [isSuccess, error, message, data]);

  if(isLoading){
    return <LoadingScreen/>
  }

  return (
    <Page heading="Monthly Transactions" content={<AddDataModal/>}>
    <div className="bg-white pb-4 h-full">
      <Table columns={dataTable.getColums()} dataSource={businessData} />
    </div>
  </Page>
  );
}
