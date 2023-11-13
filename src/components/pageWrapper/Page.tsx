import { ReactNode } from 'react';
import Breadcrumbs from './Breadcrumbs';

interface pageProps {
  heading?: string | ReactNode;
  content?: ReactNode;
  crumb?: string;
  hasBreadcrumbs?: boolean;
  children: ReactNode;
}

export default function Page({ heading, content, crumb, hasBreadcrumbs=true, children }:pageProps) {
  return (
    <div className={`${(heading || content || crumb || hasBreadcrumbs) && "gap-2 2xl:gap-3"} h-[100%] flex flex-col max-w-screen-xxlAnt w-full mx-auto`}>
      <div className={`w-full flex gap-20 justify-between mb-3`}>
        <div className="flex-1 flex flex-col justify-end leading-tight -mt-1">
          {
            heading &&
            <h1 className="text-xl 2xl:text-2xl font-medium 2xl:font-normal">{heading}</h1>
          }
          {
            hasBreadcrumbs &&
            <Breadcrumbs crumb={crumb}/>
          }
        </div>
        {
          content &&
          <div className="flex-1 flex justify-end text-right">{content}</div>
        }
      </div>
      {children}
    </div>
  );
}
