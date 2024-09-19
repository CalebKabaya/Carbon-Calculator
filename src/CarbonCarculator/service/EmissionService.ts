import { GetEmissionResponse } from 'CarbonCarculator/models';
import APICallInstance from './APICallInstance';
import { AxiosResponse } from 'axios';


export const fetchEmissionData = async () => {
    const url = 'api/v1/statistics/scope';

    try {
        const response: AxiosResponse<GetEmissionResponse> = await APICallInstance.get(url);
        console.log(response);
        return response.data;
    } catch (error) {
        throw error;
    }
};