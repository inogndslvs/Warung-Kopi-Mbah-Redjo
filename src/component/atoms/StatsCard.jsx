import { formatRupiah } from "../../utils/currency";

const StatsCard = ({
  title,
  total,
  percent,
  comparison = "vs yesterday",
  currency = true,
  trend = "up", // 'up' or 'down'
}) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow">
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">{title}</p>
        <span
          className={`text-xs ${
            trend === "up"
              ? "text-green-500 bg-green-100"
              : "text-red-500 bg-red-100"
          } px-2 py-0.5 rounded-full`}
        >
          {trend === "up" ? "+" : ""}
          {percent}%
        </span>
      </div>
      <div className="flex items-baseline mt-2">
        {/* <span className="text-lg font-medium text-gray-500">{currency}</span> */}
        <h3 className="text-2xl font-bold ml-0.5 text-gray-500">{currency ? formatRupiah(total) : total}</h3>
      </div>
      <div className="flex items-center gap-1 mt-1">
        <svg
          className={`w-3 h-3 ${
            trend === "up" ? "text-green-500" : "text-red-500"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              trend === "up"
                ? "M5 10l7-7m0 0l7 7m-7-7v18"
                : "M19 14l-7 7m0 0l-7-7m7 7V3"
            }
          />
        </svg>
        <span className="text-xs text-gray-500">{comparison}</span>
      </div>
    </div>
  );
};

export default StatsCard;
