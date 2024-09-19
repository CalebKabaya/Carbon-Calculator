import { ForgotPasswordResponse, LoginRequest, LoginResponse, ResetPasswordRequest, ResetPasswordResponse, SetPasswordRequest, SetPasswordResponse }  from "CarbonCarculator/models";
import APICallInstance from "./APICallInstance";
import { AxiosResponse } from "axios";

export const loginUser = async (loginData: LoginRequest) => {
    const url = '/api/v1/auth/login';

    try {
       const response: AxiosResponse<LoginResponse> = await APICallInstance.post(url, loginData); 
       console.log(response)
       return response.data;
    } catch(error) {
        throw error;
    }

}

export const authForgotPass = async (emailAddress: string): Promise<ForgotPasswordResponse> => {
    const url = `/api/v1/auth/forgot/password?emailAddress=${encodeURIComponent(emailAddress)}`;

    try {
        const response: AxiosResponse<ForgotPasswordResponse> = await APICallInstance.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const authResetPassword = async (resetPasswordData: ResetPasswordRequest) => {
    const url = 'api/v1/auth/reset/password';

    try {
       const response: AxiosResponse<ResetPasswordResponse> = await APICallInstance.post(url, resetPasswordData); 
       console.log(response)
       return response.data;
    } catch(error) {
        throw error;
    }

}

export const authSetPassword = async (setPasswordData: SetPasswordRequest) => {
    const url = 'api/v1/auth/set/password';

    try {
       const response: AxiosResponse<SetPasswordResponse> = await APICallInstance.post(url, setPasswordData); 
       console.log(response)
       return response.data;
    } catch(error) {
        throw error;
    }

}