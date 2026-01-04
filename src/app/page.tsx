import { PracticeSummaryCard } from "@/components";
import { PracticeSummary } from "@/types";

export default function Page() {
  // I added this as a mock data source. since there is no api call
  const practices: PracticeSummary[] = [
    {
      id: "1",
      name: "SmileCare Dental",
      city: "Lagos",
      country: "Nigeria",
      newPatientsThisMonth: 42,
      appointmentRequests: 120,
      conversionRate: 22.5,
      monthlyTrend: [18, 20, 22, 25, 30, 42],
      showRate: 92,
    },
    {
      id: "2",
      name: "BrightSmile Clinic",
      city: "Austin",
      country: "USA",
      newPatientsThisMonth: 18,
      appointmentRequests: 90,
      conversionRate: 9.2,
      monthlyTrend: [25, 22, 20, 18, 16, 18],
      showRate: 78,
    },
    {
      id: "3",
      name: "Urban Dental Studio",
      city: "Berlin",
      country: "Germany",
      newPatientsThisMonth: 28,
      appointmentRequests: 110,
      conversionRate: 15.4,
      monthlyTrend: [20, 21, 19, 22, 24, 28],
      showRate: 88,
    },
  ];

  return (
    <main className="w-full py-8">
      <h1 className="text-center mb-4 font-bold text-2xl">
        DENTISTFIND SUMMARY CARD
      </h1>
      <div className="max-w-7xl mx-auto p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {practices.map((practice) => (
          <PracticeSummaryCard key={practice.id} practice={practice} />
        ))}
      </div>
    </main>
  );
}
