/* eslint-disable @typescript-eslint/no-unused-vars */
import { App, Button, DatePicker, Form, Input } from "antd";

import { useCreateBusinessHealthMutation } from "../../../../../redux/services/data/dataApi";
import { useEffect } from "react";
import {
  IBusinessHealth,
  IFormData,
} from "../../../../../redux/services/data/dataApi.interface";

export default function AddTransactionForm({setOpenModal}:{setOpenModal:React.Dispatch<React.SetStateAction<boolean>>}) {
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const [createBusinessHealth, { data, error, isLoading, isSuccess }] =
    useCreateBusinessHealthMutation();

  const handleSubmit = (values: IFormData) => {
    form.validateFields();
    const { date, ...rest } = values;
    const otherData = {
      income: Number(rest.income),
      assets: Number(rest.assets),
      debts: Number(rest.debts),
      expenses: Number(rest.expenses),
    };
    const data: Partial<IBusinessHealth> = {
      data: otherData,
      year: new Date(date).getFullYear().toString(),
      month: new Date(date).getMonth().toString(),
    };
    createBusinessHealth(data);
  };

  useEffect(() => {
    if (isSuccess) {
      setOpenModal(false)
      message.success("Transaction created successfully !");
    }
    if (error) {
      setOpenModal(false)
      message.error(
        (error && "data" in error && error?.data?.message) ||
          "Something went wrong"
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, message, data, isSuccess]);

  return (
    <Form
      form={form}
      layout="vertical"
      validateTrigger={["onBlur"]}
      size="large"
      onFinish={handleSubmit}
    >
      <Form.Item<IFormData> 
      label="Date" 
      name="date"
      required
        rules={[
          {
            required: true,
            type: 'date',
            message: 'Date is required',
          },
          {
            warningOnly: true,
            validator: () => {
              if (error && 'data' in error && error.status === 404) {
                return Promise.reject(new Error(error.data.message));
              }
              return Promise.resolve();
            }
          }
        ]}
      >
        
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item<IFormData> label="Income" name="income"
       required
       rules={[
         {
           required: true,
           message: 'Income is required',
         },
         {
           warningOnly: true,
           validator: () => {
             if (error && 'data' in error && error.status === 404) {
               return Promise.reject(new Error(error.data.message));
             }
             return Promise.resolve();
           }
         }
       ]}
      >
        <Input placeholder="Enter income amount" type="number" />
      </Form.Item>

      <Form.Item<IFormData> 
      label="Expenses" 
      name="expenses"
      required
      rules={[
        {
          required: true,
          message: 'Expenses is required',
        },
        {
          warningOnly: true,
          validator: () => {
            if (error && 'data' in error && error.status === 404) {
              return Promise.reject(new Error(error.data.message));
            }
            return Promise.resolve();
          }
        }
      ]}
      >
        <Input placeholder="Enter expenses amount" type="number" />
      </Form.Item>
      <Form.Item<IFormData> label="Debts" name="debts"
       required
       rules={[
         {
           required: true,
           message: 'Debts is required',
         },
         {
           warningOnly: true,
           validator: () => {
             if (error && 'data' in error && error.status === 404) {
               return Promise.reject(new Error(error.data.message));
             }
             return Promise.resolve();
           }
         }
       ]}
      >
        <Input placeholder="Enter debts amount" type="number" />
      </Form.Item>
      <Form.Item<IFormData> label="Assets" name="assets"
        required
        rules={[
          {
            required: true,
            message: 'Assets is required',
          },
          {
            warningOnly: true,
            validator: () => {
              if (error && 'data' in error && error.status === 404) {
                return Promise.reject(new Error(error.data.message));
              }
              return Promise.resolve();
            }
          }
        ]}
      >
        <Input placeholder="Enter assets amount" type="number" />
      </Form.Item>

      <Form.Item<IFormData>>
        <Button
          type="primary"
          block
          loading={isLoading}
          htmlType="submit"
          size="large"
          shape="round"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
