import Joi from "joi";

export const signupSchema = new Joi.object({
  firstname: Joi.string()
                .required()
                .messages({
                  "string.base": "First name should be a text",
                  "any.required": "First name is required"
                }),
  lastname: Joi.string()
               .required()
               .messages({
                "string.base": "Last name should be a text",
                "any.required": "Last name is required"
              }),
  email: Joi.string()
            .email()
            .required()
            .messages({
              "string.email": "invalid email",
              "any.required": "Email is required"
            }),
  phone: Joi.string()
            .required()
            .messages({
             "string.base": "Phone number should be a text",
             "any.required": "Phone number is required"
           }),
  password: Joi.string()
               .pattern(new RegExp('^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$'))
               .min(8)
               .max(30)
               .required()
               .messages({
                "string.pattern.base": 'Password should be alphanumeric with special characters',
                "string.min": "Password too short",
                "string.max": "Password too long",
                "any.required": 'Password is required'
              })
});

