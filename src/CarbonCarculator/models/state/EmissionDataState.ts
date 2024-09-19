import { GetEmissionResponse } from "../dto";
import { GenericState } from "./GenericState";

export interface EmissionDataState extends GenericState {
    emissionData: GetEmissionResponse | null;
    getEmissionDataByScope: () => Promise<void>;
  }