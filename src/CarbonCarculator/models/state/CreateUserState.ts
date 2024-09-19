import { CreateUserRequest } from "../dto";
import { GenericState } from "./GenericState";

export interface CreateUserState extends GenericState {
    createUser: (userData: CreateUserRequest) => Promise<void>;
}