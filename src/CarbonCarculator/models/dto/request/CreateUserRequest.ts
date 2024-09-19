import { UserRole } from 'CarbonCarculator/models/enums';

export interface CreateUserRequest {
    emailAddress: string;
    firstName: string;
    lastName: string;
    agencyName: string;
    roleName: UserRole;
}
