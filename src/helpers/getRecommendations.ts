import { PracticeSummary } from "@/types";

export const getRecommendations = (practice: PracticeSummary): string[] => {
  const recommendations: string[] = [];

  if (practice.conversionRate < 10) {
    recommendations.push("Optimize landing page and booking flow.");
  } else {
    recommendations.push(
      "Consider increasing spend on top-performing channels."
    );
  }

  if (practice.showRate && practice.showRate < 85) {
    recommendations.push(
      "Introduce appointment reminders to improve show rate."
    );
  } else {
    recommendations.push("Maintain current patient engagement strategy.");
  }

  return recommendations.slice(0, 2);
};
