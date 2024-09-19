
export interface ForgotPasswordResponse {
    error: boolean;
    message: string;
}

export interface ResetPasswordResponse extends ForgotPasswordResponse {}
export interface SetPasswordResponse extends ForgotPasswordResponse {}
export interface SendToMailResponse extends ForgotPasswordResponse {}