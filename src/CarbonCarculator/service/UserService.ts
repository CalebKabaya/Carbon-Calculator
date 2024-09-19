import { CreateUserRequest, CreateUserResponse,  GetAgencyUserResponse,  GetUserResponse,} from "CarbonCarculator/models";
import APICallInstance from "./APICallInstance";
import { AxiosResponse } from "axios";


export const createUser = async (userData: CreateUserRequest) => {
    const url = '/api/v1/users';

    try {
        const response: AxiosResponse<CreateUserResponse> = await APICallInstance.post(url, userData);
        console.log(response)
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const getUsers = async () => {
    const url = 'api/v1/users';

    try {
        const response: AxiosResponse<GetUserResponse> = await APICallInstance.get(url);
        console.log(response)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchAgencyUsers = async (name: string) => {
    const url = `api/v1/users/agency?name=${encodeURIComponent(name)}`;

    try {
        const response: AxiosResponse<GetAgencyUserResponse> = await APICallInstance.get(url);
        console.log(response)
        return response.data;
    } catch (error) {
        throw error;
    }
}