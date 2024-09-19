// Define the structure of individual emissions
export interface Emission {
    activityName: string;
    emission: number;
}

// Define the structure of each scope
export interface Scope {
    scopeName: string;
    emissions: Emission[];
}

// Define the complete emissions data structure
export type EmissionsData = Scope[]
