import { IBusinessHealth } from "../../../../../redux/services/data/dataApi.interface";
import SigngleDataCard from "./SigngleDataCard";
import {FcPositiveDynamic,FcNegativeDynamic,FcDebt,FcMoneyTransfer} from 'react-icons/fc'

export default function CardHolder({businessData}:{businessData:IBusinessHealth[]}) {
  return (
    <div>
        {businessData?.length === 0 && <p className="w-full bg-white h-[110px] rounded-lg shadow-lg text-center text-lg font-bold pt-[3%]">
          No data found for analysing.
          </p>}
        {businessData?.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SigngleDataCard
            b={businessData[businessData.length - 1]}
            topic="income"
            logo={<FcPositiveDynamic/>}
            color='#9d9dff'
          />
           <SigngleDataCard
            b={businessData[businessData.length - 1]}
            topic="expenses"
            logo={<FcNegativeDynamic/>}
            color='#f4a24f'
          />
          <SigngleDataCard
            b={businessData[businessData.length - 1]}
            topic="assets"
            logo={<FcMoneyTransfer/>}
            color='#4ff4a2'
          />
           <SigngleDataCard
            b={businessData[businessData.length - 1]}
            topic="debts"
            logo={<FcDebt/>}
            color='#f44f4f'
          />
        </div>
      )}
    </div>
  )
}
