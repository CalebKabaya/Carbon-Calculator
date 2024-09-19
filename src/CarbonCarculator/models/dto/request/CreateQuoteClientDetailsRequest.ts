import { ClientDetailsData } from 'CarbonCarculator/models';

export interface ClientDetailsQuoteRequest extends ClientDetailsData {}

export type ClientDetailsFormData = ClientDetailsQuoteRequest & { customReason: string };
