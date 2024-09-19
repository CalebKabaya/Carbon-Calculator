import { User } from 'CarbonCarculator/models';

export interface LoginResponse {
    userDto: User;
    token: string;
}
