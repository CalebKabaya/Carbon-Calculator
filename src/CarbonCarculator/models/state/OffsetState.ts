import { GetOffsetResponse } from "../dto";
import { GenericState } from "./GenericState";

export interface OffsetState extends GenericState {
    offsetData: GetOffsetResponse | null;
    getOffset: () => Promise<void>;
  }