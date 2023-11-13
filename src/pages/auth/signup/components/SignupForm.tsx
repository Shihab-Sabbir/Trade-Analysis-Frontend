import {useEffect} from 'react'
import { App, Button, Form, Input} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterAccountMutation } from '../../../../redux/services/auth/authApi';
import { IRegisterPayload } from '../../../../redux/services/auth/authApi.interfaces';


export default function SignupForm() {
  const [registerAccount, {data, isLoading, error,isSuccess }] = useRegisterAccountMutation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const {message} = App.useApp();


  const handleSubmit = (values: IRegisterPayload) => {
    form.validateFields();
    registerAccount(values)
  };

  useEffect(() => {
    if(isSuccess){
     message.success(data && 'message' in data && data?.message || "User created successfully !")
     navigate('/')
    }
    if(error){
      message.error(error && 'data' in error && error?.data?.message || 'Something went wrong')
    }
  }, [data, isSuccess, error, message, navigate])
  
  return (
    <Form
      form={form}
      layout="vertical"
      validateTrigger={['onBlur']}
      size="large"
      onFinish={handleSubmit}
    >
       <Form.Item<IRegisterPayload>
        label="First Name"
        name="firstName"
        required
        rules={[
          {
            required: true,
            type: 'string',
            message: 'First Name is required',
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
        <Input
          placeholder="Type your email here..."
          className="rounded-none border-l-4 border-l-primary"
        />
      </Form.Item>
      <Form.Item<IRegisterPayload>
        label="Last Name"
        name="lastName"
        required
        rules={[
          {
            required: true,
            type: 'string',
            message: 'Last Name is required',
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
        <Input
          placeholder="Type your email here..."
          className="rounded-none border-l-4 border-l-primary"
        />
      </Form.Item>
      <Form.Item<IRegisterPayload>
        label="Company Name"
        name="companyName"
        required
        rules={[
          {
            required: true,
            type: 'string',
            message: 'Last Name is required',
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
        <Input
          placeholder="Type your email here..."
          className="rounded-none border-l-4 border-l-primary"
        />
      </Form.Item>
      <Form.Item<IRegisterPayload>
        label="Email"
        name="email"
        required
        rules={[
          {
            required: true,
            type: 'email',
            message: 'Email is required',
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
        <Input
          placeholder="Type your email here..."
          className="rounded-none border-l-4 border-l-primary"
        />
      </Form.Item>
      <Form.Item<IRegisterPayload>
        label="Password"
        name="password"
        required
        rules={[
          {
            required: true,
            message: 'Password is required',
          },
          {
            warningOnly: true,
            validator: () => {
              if (error && 'data' in error && error.status !== 404) {
                return Promise.reject(new Error(error.data.message));
              }
              return Promise.resolve();
            }
          }
        ]}
      >
        <Input.Password
          placeholder="Type your password here..."
          className="rounded-none border-l-4 border-l-primary"
        />
      </Form.Item>
      
      <p className='pb-3'>Already have an account? please <Link to='/' className='text-primary'>Login </Link></p>
      <Form.Item<IRegisterPayload>>
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
