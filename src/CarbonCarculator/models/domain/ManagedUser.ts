import { UserRole } from "../enums";

export interface ManagedUser {
  id: number;
  role: {
    id: number;
    roleName: UserRole | string; 
  };
  emailAddress: string;
  locked: boolean;
  firstName: string;
  lastName: string;
  agency: {
    name: string;
    id: number;
  };
  createdAt: string; 
}
