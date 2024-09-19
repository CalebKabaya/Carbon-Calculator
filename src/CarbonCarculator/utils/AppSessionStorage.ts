

import { User, UserWithAgencyName } from "CarbonCarculator/models";

const tokenStorageKey: string = 'bearerToken';
const userDataStorageKey: string = 'userData';

// Save bearer token to session storage
export const saveBearerTokenToStorage = (bearerToken: string) => sessionStorage.setItem(tokenStorageKey, bearerToken);

export const getBearerTokenFromStorage = () => {
    const bearerToken = sessionStorage.getItem(tokenStorageKey);
    if (bearerToken === null) return null;
    return bearerToken;
};

export const deleteBearerTokenFromStorage = () => sessionStorage.removeItem(tokenStorageKey);

// Save user data to session storage
export const saveUserDataToStorage = (userData: User) => {
    sessionStorage.setItem(userDataStorageKey, JSON.stringify(userData));
};

export const getUserDataFromStorage = () => {
    const userData = sessionStorage.getItem(userDataStorageKey);
    if (userData === null) return null;
    return JSON.parse(userData) as User;
};

export const deleteUserDataFromStorage = () => sessionStorage.removeItem(userDataStorageKey);

// Retrieve the agency name from session storage
export const getAgencyNameFromStorage = () => {
    const userData = sessionStorage.getItem(userDataStorageKey);
    if (userData === null) return null;

    const userObject = JSON.parse(userData) as UserWithAgencyName;
    return userObject.agency.name;
};

export const getAgencyIdFromStorage = () => {
    const userData = sessionStorage.getItem(userDataStorageKey);
    if (userData === null) return null;

    const userObject = JSON.parse(userData) as UserWithAgencyName;
    return userObject.agency.id;
};

export const retrieveEncryptedData = () => {
    const storedData = sessionStorage.getItem(userDataStorageKey);

    if (storedData === null) return null;

    try {
        const parsedData = JSON.parse(storedData);
        console.log(parsedData);

        // Check if role exists in the parsedData
        if (parsedData?.role?.roleName) {
            return parsedData.role.roleName;
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error parsing stored data', error);
        return null;
    }
};
