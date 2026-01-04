export const getStatus = (conversionRate: number) => {
  if (conversionRate >= 20) {
    return { label: "High Performer", color: "green" };
  }
  if (conversionRate < 10) {
    return { label: "At Risk", color: "red" };
  }
  return { label: "Stable", color: "gray" };
};
