import { signupSchema } from "../validations/auth.validation.js";
import AppError from "../util/appError.js"
import ErrorTypes from "../constants/errorTypes.js";

export const validateSignupInput = (req, res, next)=>{
  const signupInput = req.body;
  const { error, value } = signupSchema.validate(signupInput);
  if(error) throw new AppError(error.message, 400, ErrorTypes.VALIDATION_ERROR);
  req.signupData = value;
  next();
};