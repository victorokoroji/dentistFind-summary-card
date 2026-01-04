export interface PracticeSummary {
  id: string;
  name: string;
  city: string;
  country: string;
  newPatientsThisMonth: number;
  appointmentRequests: number;
  conversionRate: number; // this is in percentage
  monthlyTrend: number[]; // length = 6
  showRate?: number; // optional extra metric added
}
