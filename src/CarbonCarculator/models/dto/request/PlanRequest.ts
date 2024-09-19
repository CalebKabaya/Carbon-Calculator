import { Plan, GetPlan } from 'CarbonCarculator/models';

export interface PlanRequest extends Plan {}

export interface GetPlanRequest extends GetPlan {}

export interface GetSinglePlanRequest extends GetPlan {}
