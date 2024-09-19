import { GetOffsetResponse } from 'CarbonCarculator/models';
import APICallInstance from './APICallInstance';
import { AxiosResponse } from 'axios';


export const fetchOffset = async () => {
    const url = 'api/v1/statistics/month/offset';

    try {
        const response: AxiosResponse<GetOffsetResponse> = await APICallInstance.get(url);
        console.log(response);
        return response.data;
    } catch (error) {
        throw error;
    }
};