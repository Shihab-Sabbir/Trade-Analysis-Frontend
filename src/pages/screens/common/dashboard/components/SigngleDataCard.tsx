import { IBusinessHealth } from "../../../../../redux/services/data/dataApi.interface";
import { ReactNode } from "react";

export default function SigngleDataCard({
  b,
  topic,
  logo,
  color,
}: {
  b: IBusinessHealth;
  topic: string;
  logo: ReactNode;
  color: string;
}) {
  
  const current = b?.data?.[topic] || 0;
  const previous = b?.lastMonth?.data?.[topic] || 0;
  const sign = current < previous ? 'less' : 'more';

  return (
    <div className="shadow h-[110px] px-6 rounded-lg bg-white sm:w-fit flex items-center gap-5">
      <div
        className={`text-[30px] border-4 p-2 rounded-full`}
        style={{
          color: color,
          borderColor: color,
        }}
      >
        {logo}
      </div>
      <div>
        <p className="text-lg font-semibold capitalize">{topic}</p>
        <p className="font-semibold">BDT {current}</p>
        {Math.abs(current - previous) > 0 && (
          <p className="text-xs leading-[25px]">
            BDT {Math.abs(current - previous)}{" "}
            <span
              className={
                (current < previous)
                  ? "text-red-600 font-bold"
                  : "text-green-600 font-bold"
              }
            >
              {sign}
            </span>{" "}
            than last month
          </p>
        )}
        {Math.abs(current - previous) === 0 && (
          <p className="text-xs leading-[25px]">No changes from last month.
          </p>
        )}
      </div>
    </div>
  );
}
