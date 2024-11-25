import { schemaValidation } from "../../utility/validation/schemaValidation.js";
import Joi from "joi";

const blogPostSchema = {
    title: Joi.string().min(5).max(100).required(), 
    hook: Joi.string().min(1).max(500), 
    content: Joi.string().min(500).max(10000).required(), 
    image_uri: Joi.string().uri(), 
    tags: Joi.array().items(Joi.string().min(3).max(10)).length(10)
};

export async function blogPostValidation(data) {
    return schemaValidation(data, Joi.object(blogPostSchema));
}

const editBlogPostSchema = {
    title: Joi.string().min(5).max(100), 
    hook: Joi.string().min(1).max(500), 
    content: Joi.string().min(500).max(10000), 
    image_uri: Joi.string().uri(), 
    tags: Joi.array().items(Joi.string().min(3).max(10)).length(10),
    edited_date: Joi.string().isoDate().required()
};

export async function editBlogPostValidation(data) {
    return schemaValidation(data, Joi.object(editBlogPostSchema));
}

const archivedBlogPostSchema = {
    id: Joi.string().pattern(/^[A-Za-z0-9_-]{21}$/, 'Nanoid').required()
    .messages({ 
        'string.pattern.base': '"id" must be a valid Nanoid (21 characters, alphanumeric with "-" or "_")' 
    }),
    ...blogPostSchema,
    creation_date: Joi.string().isoDate().required(),
    archive_date: Joi.string().isoDate().required()
}

export async function archivedBlogPostValidation(data) {
    return schemaValidation(data, Joi.object(archivedBlogPostSchema));
}