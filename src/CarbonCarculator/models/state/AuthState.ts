import { ForgotPassword, ResetPassword, SetPassword, User } from '../domain';
import { LoginRequest, ForgotPasswordResponse, ResetPasswordResponse, SetPasswordResponse } from '../dto';
import { GenericState } from './GenericState';

export interface AuthState extends GenericState {
    userData: User | null;
    forgotPasswordData: ForgotPasswordResponse | null;
    resetPasswordData: ResetPasswordResponse | null;
    setPasswordData: SetPasswordResponse | null;
    login: (loginData: LoginRequest) => Promise<void>;
    logout: () => void;
    forgotPassword: (forgotPasswordData: ForgotPassword) => Promise<void>;
    resetPassword: (resetPasswordData: ResetPassword) => Promise<void>;
    setPassword: (setPasswordData: SetPassword) => Promise<void>;
}
