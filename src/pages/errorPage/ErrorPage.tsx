import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import server_error_img from '../../assets/500_server_error.png';
import not_found_img from '../../assets/not_found.png';
import forbidden_img from '../../assets/403_Forbidden.png';
import { LeftOutlined } from '@ant-design/icons';

interface pageProps {
  errorType: 'NOT_FOUND' | 'FORBIDDEN' | 'SERVER_ERROR';
}
export default function ErrorPage({ errorType }: pageProps) {
  const navigate = useNavigate();
  const errorImage = (
    <img
      src={
        errorType === 'FORBIDDEN'
          ? forbidden_img
          : errorType === 'NOT_FOUND'
          ? not_found_img
          : server_error_img
      }
      alt="error_image"
      className="max-w-[300px] xl:max-w-[400px]"
    />
  );

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Result
        icon={errorImage}
        title={
          errorType === 'FORBIDDEN'
            ? 'Sorry, you are not authorized to access this page.'
            : errorType === 'NOT_FOUND'
            ? 'Sorry, the page you visited does not exist.'
            : 'Internal Server Error, try again later.'
        }
        className="flex flex-col h-full justify-center items-center"
        // subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            // size='large'
            shape="round"
            onClick={() => navigate(-1)}
            icon={<LeftOutlined />}
            className="shadow-2xl shadow-primary"
          >
            Go Back
          </Button>
        }
      />
    </div>
  );
}
