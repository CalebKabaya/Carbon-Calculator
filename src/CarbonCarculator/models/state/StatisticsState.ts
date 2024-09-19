import { GetStatisticsResponse } from "../dto";
import { GenericState } from "./GenericState";

export interface StatisticsState extends GenericState {
    statisticData: GetStatisticsResponse | null;
    getStatistic: () => Promise<void>;
  }