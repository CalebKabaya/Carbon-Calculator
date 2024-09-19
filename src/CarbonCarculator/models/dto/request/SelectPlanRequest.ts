export interface SelectPlanRequest{
  planId: number;
  coverType: string;
  totalPremiumCost: number;
  warTerrorismCheck: boolean;
  covidExtensionCheck: boolean;
}