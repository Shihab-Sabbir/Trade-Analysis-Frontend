import { App, Button, Form, Input } from "antd";
import { IFormData } from "../../../../redux/services/data/dataApi.interface";
import { useCalculateHealthMutation } from "../../../../redux/services/data/dataApi";

export default function Calculator() {
  const [form] = Form.useForm();
  const { message } = App.useApp();

  const [calculateHealth,{data,error,isLoading}] = useCalculateHealthMutation();

  const handleSubmit = (values: IFormData) => {
    form.validateFields();
    const postData :IFormData= {
        income: Number(values.income),
        assets: Number(values.assets),
        debts: Number(values.debts),
        expenses: Number(values.expenses),
      };
     calculateHealth(postData);
  };

console.log(message,{data})
  return (
    <div className="min-h-[calc(100vh-95px)] bg-white">
      <div className="max-w-[500px] rounded-lg shadow-lg mx-auto">
        <div className="border h-[100px]">
            <p className="text-3xl font-bold" >0</p>
        </div>
        <div className="p-4">
          <Form
            form={form}
            layout="vertical"
            validateTrigger={["onBlur"]}
            size="large"
            onFinish={handleSubmit}
          >
            <Form.Item<IFormData>
              label="Income"
              name="income"
              required
              rules={[
                {
                  required: true,
                  message: "Income is required",
                },
                {
                  warningOnly: true,
                  validator: () => {
                    if (error && "data" in error && error.status === 404) {
                      return Promise.reject(new Error(error.data.message));
                    }
                    return Promise.resolve();
                  },
                },
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
                  message: "Expenses is required",
                },
                {
                  warningOnly: true,
                  validator: () => {
                    if (error && "data" in error && error.status === 404) {
                      return Promise.reject(new Error(error.data.message));
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input placeholder="Enter expenses amount" type="number" />
            </Form.Item>
            <Form.Item<IFormData>
              label="Debts"
              name="debts"
              required
              rules={[
                {
                  required: true,
                  message: "Debts is required",
                },
                {
                  warningOnly: true,
                  validator: () => {
                    if (error && "data" in error && error.status === 404) {
                      return Promise.reject(new Error(error.data.message));
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input placeholder="Enter debts amount" type="number" />
            </Form.Item>
            <Form.Item<IFormData>
              label="Assets"
              name="assets"
              required
              rules={[
                {
                  required: true,
                  message: "Assets is required",
                },
                {
                  warningOnly: true,
                  validator: () => {
                    if (error && "data" in error && error.status === 404) {
                      return Promise.reject(new Error(error.data.message));
                    }
                    return Promise.resolve();
                  },
                },
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
                Calculate
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
