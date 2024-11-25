import Joi from "joi";
import { schemaValidation } from "../../utility/validation/schemaValidation.js";
// This will be a future implementation. Adding login, user authentication, and user privelage

const userAuthSchema = Joi.object({
    id: Joi.string().pattern(/^[A-Za-z0-9_-]{21}$/, 'Nanoid').required()
    .messages({ 
        'string.pattern.base': '"id" must be a valid Nanoid (21 characters, alphanumeric with "-" or "_")' 
    }),
    username: Joi.string().min(8).max(20).lowercase().pattern(/^[a-zA-Z_.-]+$/).required()
    .messages({
        'string.pattern.base': 'Username can only contain lowercase letters, underscores (_), dots (.), and hyphens (-).'
    }), 
    password: Joi.string().min(8).max(30).required().pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d{4})(?=.*[!@#$%&?].*[!@#$%&?].*[!@#$%&?])[A-Za-z\d!@#$%&?]{12,}$/)
    .messages({
        'string.pattern.base': 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 4 digits, 3 special characters (!@#$%&?), and be at least 12 characters long.'
    }), 
    name: Joi.string().min(5).max(50).lowercase().required(), 
    user_privilege: Joi.string().valid('admin', 'user').required().message({
        'any.only': '"privilege" must be either "Admin" or "User"'
    })
});

export async function userValidation(data) {
    return schemaValidation(data, userAuthSchema);
}
