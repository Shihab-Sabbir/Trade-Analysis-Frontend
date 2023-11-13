/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ColumnsType } from 'antd/lib/table';
import { Button } from 'antd';
import { IBusinessHealth } from '../../../../../redux/services/data/dataApi.interface';
import { months } from '../constants/constant';

const handleDelete = (data:IBusinessHealth,deleteBusinessHealth: ((arg0: any) => any)) => {
  if(data?._id && data._id != undefined){
    deleteBusinessHealth(data._id);
  }
};

const getColums = (deleteBusinessHealth:any): ColumnsType<IBusinessHealth> => {
  return [
    {
      title: 'Year',
      dataIndex: 'year',
      sorter: (a, b) => a.year.localeCompare(b.year),
      sortDirections: ['descend'],
    },
    {
      title: 'Month',
      dataIndex: 'month',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.month.localeCompare(b.month),
    },
    {
      title: 'Income',
      dataIndex: ['data', 'income'],
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.data.income - b.data.income,
    },
    {
      title: 'Expenses',
      dataIndex: ['data', 'expenses'],
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.data.expenses - b.data.expenses,
    },
    {
      title: 'Debts',
      dataIndex: ['data', 'debts'],
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.data.debts - b.data.debts,
    },
    {
      title: 'Assets',
      dataIndex: ['data', 'assets'],
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.data.assets - b.data.assets,
    },
    {
      title: 'Health',
      dataIndex: 'health',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, data) => (
        <Button onClick={() => handleDelete(data,deleteBusinessHealth)}>Delete</Button>
      ),
    },
  ];
};

const getData = (dataData: IBusinessHealth[]): IBusinessHealth[] => {
  return dataData.map(data => ({
    ...data,
    month:months[Number(data.month)],
    key: `${data.year}-${data.month}`,
  }));
};

const dataTable = {
  getColums,
  getData,
};

export default dataTable;
