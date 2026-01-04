export const TrendChart = ({ data }: { data: number[] }) => {
  const max = Math.max(...data);

  return (
    <div className="flex items-end gap-1 h-16 mt-2">
      {data.map((value, index) => (
        <div
          key={value}
          className="w-2 rounded bg-blue-500/70"
          style={{ height: `${(value / max) * 100}%` }}
          aria-label={`Month ${index + 1}: ${value}`}
        />
      ))}
    </div>
  );
};
