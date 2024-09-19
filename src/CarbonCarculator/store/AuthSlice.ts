import { User } from 'CarbonCarculator/models';

interface UserStoreState {
    user: User | null;
    setUser: (payload: User) => void;
    removeUser: () => void;
}

export const createAuthSlice = (set: (fn: (state: UserStoreState) => void) => void): UserStoreState => ({
    user: null,
    setUser: (payload: User) => {
        set((state) => {
            state.user = payload;
        });
    },
    removeUser: () => {
        set((state) => {
            state.user = null;
        });
    }
});
