import { UserRole } from 'CarbonCarculator/models/enums';

export interface CreateUserResponse {
    id: number;
    emailAddress: string;
    password: string;
    firstName: string;
    lastName: string;
    agencyName: string;
    role: {
        roleName: UserRole;
    };
}
