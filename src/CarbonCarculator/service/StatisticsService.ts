import { GetStatisticsResponse } from 'CarbonCarculator/models';
import APICallInstance from './APICallInstance';
import { AxiosResponse } from 'axios';


export const fetchStatistics = async () => {
    const url = 'api/v1/statistics/totals';

    try {
        const response: AxiosResponse<GetStatisticsResponse> = await APICallInstance.get(url);
        console.log(response);
        return response.data;
    } catch (error) {
        throw error;
    }
};