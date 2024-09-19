import { GetAgencyProfileResponse, ProfileState } from 'CarbonCarculator/models';
import { ProfileService } from 'CarbonCarculator/service';
import { create } from 'zustand';

export const useProfileStore = create<ProfileState>((set) => ({
    isLoading: false,
    isError: false,
    error: null,
    agencyProfileData: null,

    getAgencyProfile: async (agencyId: number) => {
        set({ isLoading: true });

        try {
            const response: GetAgencyProfileResponse = await ProfileService.getQuoteDetails(agencyId);

            set({ isError: false, error: null, agencyProfileData: response });
        } catch (error) {
            set({ error: 'Failed to get agency profile', isError: true });
            throw error;
        } finally {
            set({ isLoading: false });
        }
    }
}));
