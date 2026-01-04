import { getRecommendations, getStatus } from "@/helpers";
import { PracticeSummary } from "@/types";
import { TrendChart } from "./TrendChart";
import { Metric } from "./Metric";

export const PracticeSummaryCard = ({
  practice,
}: {
  practice: PracticeSummary;
}) => {
  const status = getStatus(practice.conversionRate);
  const recommendations = getRecommendations(practice);

  const statusColorMap: Record<string, string> = {
    green: "border-green-500 text-green-600",
    red: "border-red-500 text-red-600",
    gray: "border-gray-400 text-gray-600",
  };

  return (
    <div
      className={`border-l-4 ${
        statusColorMap[status.color]
      } bg-white dark:bg-neutral-900 rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-105 transition cursor-pointer ease-in-out duration-300`}
    >
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {practice.name}
        </h2>
        <p className="text-sm text-neutral-500">
          {practice.city}, {practice.country}
        </p>
      </div>
      {/* Status */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-2 text-sm font-medium">
          <span
            className={`h-2 w-2 rounded-full bg-current ${
              statusColorMap[status.color]
            }`}
          />
          {status.label}
        </span>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Metric label="New Patients" value={practice.newPatientsThisMonth} />
        <Metric label="Appointments" value={practice.appointmentRequests} />
        <Metric label="Conversion Rate" value={`${practice.conversionRate}%`} />
        {practice.showRate !== undefined && (
          <Metric label="Show Rate" value={`${practice.showRate}%`} />
        )}
      </div>

      {/* Trend */}
      <div className="mb-4">
        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          6-Month Trend
        </p>
        <TrendChart data={practice.monthlyTrend} />
      </div>

      {/* Recommendations */}
      <div>
        <p className="text-sm font-medium mb-2">Recommendations</p>
        <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
          {recommendations.map((recommendation) => (
            <li key={recommendation}>{recommendation}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
