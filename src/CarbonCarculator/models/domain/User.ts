import { UserRole } from '../enums';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    emailAddress: string;
    //TODO: Change to be roleName once new version of Backend Code is done
    role: {
        id: number;
        roleName: UserRole;
    };
    };

export interface UserWithAgencyName extends User {
    agency: {
        name: string;
        id: number;
    };
}

export interface ForgotPassword {
    email: string;
}

export interface ResetPassword {
    token: string;
    password: string;
}

export interface SetPassword {
    confirmationToken: string;
    newPassword: string;
}


export interface SetPassword {
    confirmationToken: string;
    newPassword: string;
}







