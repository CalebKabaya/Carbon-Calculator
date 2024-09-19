import { GetAgencyProfileResponse } from 'CarbonCarculator/models';
import APICallInstance from './APICallInstance';
import { AxiosResponse } from 'axios';

class ProfileServiceClass {
    getQuoteDetails = async (agencyId: number) => {
        const url = `/api/v1/agencies/profile/${agencyId}`;

        try {
            const response: AxiosResponse<GetAgencyProfileResponse> = await APICallInstance.get(url);
            console.log(response);
            return response.data;
        } catch (error) {
            throw error;
        }
    };
}

export const ProfileService = new ProfileServiceClass();
