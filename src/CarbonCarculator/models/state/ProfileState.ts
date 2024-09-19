import { GetAgencyProfileResponse } from "../dto";
import { GenericState } from "./GenericState";

export interface ProfileState extends GenericState {
    agencyProfileData: GetAgencyProfileResponse | null;
    getAgencyProfile: (agencyId: number) => Promise<void>;
  }