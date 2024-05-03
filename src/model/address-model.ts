import { Address } from "@prisma/client";

export type CreateAddressRequest = {
    contact_id: number;
    street?: string;
    city?: string;
    state?: string;
    country: string;
    zip_code: string;
}

export type AddressResponse = {
    id: number;
    street?: string | null;
    city?: string | null;
    state?: string | null;
    country: string | null;
    zip_code: string | null;
}

export type GetAddressRequest = {
    contact_id: number;
    id: number;
}

export type UpdateAddressRequest = {
    id: number;
    contact_id: number;
    street?: string;
    city?: string;
    state?: string;
    country: string;
    zip_code: string;
}

export type RemoveAddressRequest = GetAddressRequest;

export function toAddressResponse(address: Address): AddressResponse {
    return {
        id: address.id,
        street: address.street,
        city: address.city,
        state: address.state,
        country: address.country,
        zip_code: address.zip_code,
    }
}