export const Metric = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => {
  return (
    <div>
      <p className="text-xs text-neutral-500">{label}</p>
      <p className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
        {value}
      </p>
    </div>
  );
};
