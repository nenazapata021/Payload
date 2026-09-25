import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'price',
            type: 'number',
            required: true,
        },
        {
            name: 'categories',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
        },
        {
            name: 'variants',
            type: 'array',
            fields: [
                { name: 'size', type: 'text', required: true },
                { name: 'color', type: 'text', required: true },
                { name: 'stock', type: 'number', required: true },
            ],
        },
        {
            name: 'images',
            type: 'upload',
            relationTo: 'media',
            hasMany: true,
        },
    ],
}