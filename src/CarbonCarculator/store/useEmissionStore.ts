import { EmissionDataState, GetEmissionResponse } from 'CarbonCarculator/models';
import { fetchEmissionData} from 'CarbonCarculator/service';
import { create } from 'zustand';

export const useEmissionStore = create<EmissionDataState>((set) => ({
    isLoading: false,
    isError: false,
    error: null,
    emissionData: null,
  

    getEmissionDataByScope: async () => {
        set({ isLoading: true });

        try {
            const response: GetEmissionResponse = await fetchEmissionData();

            set({ isError: false, error: null, emissionData: response });
        } catch (error) {
            set({ error: 'Failed to get countries', isError: true });
            throw error;
        } finally {
            set({ isLoading: false });
        }
    },


  
}));
