import { GetOffsetResponse, OffsetState } from 'CarbonCarculator/models';
import { fetchOffset} from 'CarbonCarculator/service';
import { create } from 'zustand';

export const useOffsetStore = create<OffsetState>((set) => ({
    isLoading: false,
    isError: false,
    error: null,
    offsetData: null,
  

    getOffset: async () => {
        set({ isLoading: true });

        try {
            const response: GetOffsetResponse = await fetchOffset();

            set({ isError: false, error: null, offsetData: response });
        } catch (error) {
            set({ error: 'Failed to get countries', isError: true });
            throw error;
        } finally {
            set({ isLoading: false });
        }
    },


  
}));
