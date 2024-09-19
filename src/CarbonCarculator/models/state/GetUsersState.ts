import { ManagedUser } from "../domain";
import { CreateUserRequest, GetAgencyUserResponse } from "../dto";

import { GenericState } from "./GenericState";

export interface GetUserState extends GenericState {
  getUserData: ManagedUser[];
  agencyUserData: GetAgencyUserResponse | null; 
  getUserList: () => Promise<void>; 
  getAgecyUsersList: (name:string) => Promise<void>;

}


export interface CreateUserState extends GenericState {
    createUser: (userData: CreateUserRequest) => Promise<void>;
}

// export interface GetAgencyUserState extends GenericState {
//   agencyUserData: GetAgencyUserResponse; 
//   getAgecyUsersList: (name:string) => Promise<void>;

// }
