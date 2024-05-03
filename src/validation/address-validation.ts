import { ZodType, z } from "zod";

export class AddressValidation {
    static readonly CREATE: ZodType = z.object({
        contact_id: z.number().positive(),
        street: z.string().min(1).max(255).optional(),
        city: z.string().min(1).max(100).optional(),
        state: z.string().min(1).max(100).optional(),
        country: z.string().min(1).max(100),
        zip_code: z.string().min(1).max(10),
    });

    static readonly UPDATE: ZodType = z.object({
        id: z.number().positive(),
        contact_id: z.number().positive(),
        street: z.string().min(1).max(255).optional(),
        city: z.string().min(1).max(100).optional(),
        state: z.string().min(1).max(100).optional(),
        country: z.string().min(1).max(100),
        zip_code: z.string().min(1).max(10),
    });

    static readonly GET: ZodType = z.object({
        contact_id: z.number().positive(),
        id: z.number().positive(),
    });

    static readonly REMOVE: ZodType = z.object({
        contact_id: z.number().positive(),
        id: z.number().positive(),
    });
}