import { GetStatisticsResponse, StatisticsState } from 'CarbonCarculator/models';
import { fetchStatistics} from 'CarbonCarculator/service';
import { create } from 'zustand';

export const useStatisticsStore = create<StatisticsState>((set) => ({
    isLoading: false,
    isError: false,
    error: null,
    statisticData: null,
  

    getStatistic: async () => {
        set({ isLoading: true });

        try {
            const response:  GetStatisticsResponse = await fetchStatistics();

            set({ isError: false, error: null, statisticData: response });
        } catch (error) {
            set({ error: 'Failed to get countries', isError: true });
            throw error;
        } finally {
            set({ isLoading: false });
        }
    },


  
}));
