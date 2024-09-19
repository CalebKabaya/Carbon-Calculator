import { CreateUserRequest, CreateUserState, GetAgencyUserResponse, GetUserResponse, GetUserState } from 'CarbonCarculator/models';
import { createUser, fetchAgencyUsers, getUsers } from 'CarbonCarculator/service';
import { create } from 'zustand';

// Merging CreateUserState and GetUserState into one store
export const useCreateUserStore = create<CreateUserState & GetUserState>((set) => ({
    // CreateUserState properties
    isLoading: false,
    isError: false,
    error: null,
    userData: null,
    agencyUserData: null,

    // GetUserState properties
    getUserData: [],

    // CreateUserState methods
    createUser: async (userData: CreateUserRequest) => {
        set({ isLoading: true });

        try {
            await createUser(userData);
            set({ isError: false, error: null });
            // Optionally, trigger a refresh of the user list here
            await useCreateUserStore.getState().getUserList(); // Refresh the list after creating a user
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            set({ error: errorMessage, isError: true });
            throw error;
        } finally {
            set({ isLoading: false });
        }
    },

    // GetUserState methods
    getUserList: async () => {
        set({ isLoading: true });

        try {
            const response: GetUserResponse = await getUsers();
            set({ isError: false, error: null, getUserData: response });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            set({ error: errorMessage, isError: true });
            throw error;
        } finally {
            set({ isLoading: false });
        }
    },
    // GetUserState methods
    getAgecyUsersList: async (name: string) => {
        set({ isLoading: true });

        try {
            const response: GetAgencyUserResponse = await fetchAgencyUsers(name);
            set({ isError: false, error: null, agencyUserData: response });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            set({ error: errorMessage, isError: true });
            throw error;
        } finally {
            set({ isLoading: false });
        }
    }
}));
