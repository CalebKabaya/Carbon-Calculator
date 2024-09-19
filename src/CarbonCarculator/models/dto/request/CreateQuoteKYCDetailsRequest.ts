export interface FileWithName {
    file: File;
    fileName: string;
}

export interface PersonDetails {
    firstName: string;
    otherNames: string;
    phoneNumber: string;
    emailAddress: string;
    dateOfBirth: string;
    kraPinNumber: string;
    passportNumber: string;
    nationality: string;
    occupation: string;
    files: FileWithName[];
}

//TODO: Change 'filenames' field to 'fileNames'
export type PersonKYCDetails = Omit<PersonDetails, 'files'> & { filenames: string[]};

export interface CreateQuoteKYCDetailsRequest {
    mainCustomer: PersonKYCDetails;
    dependants: PersonKYCDetails[];
}
