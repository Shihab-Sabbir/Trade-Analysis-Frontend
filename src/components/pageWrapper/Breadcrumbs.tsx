import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

interface breadcrumbsProps {
  crumb?: string;
}

export default function Breadcrumbs({ crumb }: breadcrumbsProps) {
  const location = useLocation();
  const navigation = (index: number) => {
    const url = location?.pathname
      .split('/')
      .slice(0, index)
      .filter(crumb => crumb !== '')
      .join('/');
    return `/${url}`;
  };
  const crumbs = location.pathname
    .split('/')
    .filter(path => path !== '')
    .map((path, index, arr) => {
      return {
        title:
          index === 0 ? (
            <Link to="/admin/dashboard">
              <HomeOutlined />
            </Link>
          ) : index === arr.length - 1 ? (
            crumb ? (
              crumb
            ) : (
              path
            )
          ) : (
            <Link to={navigation(index + 2)}>{path}</Link>
          ),
      };
    });
  return <Breadcrumb items={crumbs} className='capitalize'/>;
}
