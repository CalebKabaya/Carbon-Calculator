import {
    AuthState,
    ForgotPassword,
    ForgotPasswordResponse,
    LoginRequest,
    LoginResponse,
    ResetPasswordRequest,
    ResetPasswordResponse,
    SetPasswordRequest,
    SetPasswordResponse
} from 'CarbonCarculator/models';
import { authForgotPass, authResetPassword, authSetPassword, loginUser } from 'CarbonCarculator/service';
import {
    deleteBearerTokenFromStorage,
    deleteUserDataFromStorage,
    saveBearerTokenToStorage,
    saveUserDataToStorage
} from 'CarbonCarculator/utils/AppSessionStorage';
import { create } from 'zustand';

export const useAuthStore = create<AuthState>((set) => ({
    isLoading: false,
    isError: false,
    error: null,
    userData: null,
    forgotPasswordData: null,
    resetPasswordData: null,
    setPasswordData: null,

    login: async (loginData: LoginRequest) => {
        set({ isLoading: true});
    
        try {
            const response: LoginResponse = await loginUser(loginData);
    
            set((state) => {
                if (state.userData !== response?.userDto) {
                    saveBearerTokenToStorage(response.token);
                    saveUserDataToStorage(response.userDto);
                    return { userData: response?.userDto, isError: false, error: null };
                }
                return state;
            });
        } catch (error) {
            set({ error: 'Failed to log user in', isError: true });
            throw error;
        } finally {
            set({isLoading: false});
        }
    },
    


    logout: () => {
        set({ userData: null });
        deleteUserDataFromStorage();
        deleteBearerTokenFromStorage();
    },

    forgotPassword: async (forgotPasswordData: ForgotPassword) => {
        set({ isLoading: true });

        try {
            const response: ForgotPasswordResponse = await authForgotPass(forgotPasswordData.email);
            set({ forgotPasswordData: response, isError: false, error: null });
        } catch (error) {
            // Set error message from the response
            const errorMessage = error?.response?.data?.message || 'Failed to send forgot password request';
            set({ error: errorMessage, isError: true });
            throw error;
        } finally {
            set({ isLoading: false });
        }
    },

    resetPassword: async (resetPasswordData: ResetPasswordRequest) => {
        set({ isLoading: true });

        try {
            const response: ResetPasswordResponse = await authResetPassword(resetPasswordData);
            set({ resetPasswordData: response, isError: false, error: null });
        } catch (error) {
            const errorMessage = error?.response?.data?.message || 'Failed to reset password';
            set({ error: errorMessage, isError: true });
            throw error;
        } finally {
            set({ isLoading: false });
        }
    },
    setPassword: async (setPasswordData: SetPasswordRequest) => {
        set({ isLoading: true });

        try {
            const response: SetPasswordResponse = await authSetPassword(setPasswordData);
            set({ resetPasswordData: response, isError: false, error: null });
        } catch (error) {
            const errorMessage = error?.response?.data?.message || 'Failed to reset password';
            set({ error: errorMessage, isError: true });
            throw error;
        } finally {
            set({ isLoading: false });
        }
    }
}));
