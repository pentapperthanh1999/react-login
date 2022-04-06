const Joi = require("joi");
//VALIDATION
//register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(4).max(30).required(),
    email: Joi.string().min(6).max(30).required().email(),
    password: Joi.string().min(6).required(),
    firstname: Joi.string().min(4).max(30).required(),
    lastname: Joi.string().min(4).max(30).required(),
    language: Joi.string().min(4).max(30).required(),
    position: Joi.string().min(4).max(30).required(),
  });
  return schema.validate(data);
};
//login validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).max(30).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

const createClassValidation = (data) => {
  const schema = Joi.object({
    code: Joi.string().min(6).max(50).required(),
    name: Joi.string().min(6).max(50).required(),
  });
  return schema.validate(data);
};


const createTaskValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(6).max(50).required(),
    type: Joi.string().min(6).max(50).required(),
    status: Joi.string().min(6).max(50).required(),
    priority: Joi.number().integer().required(),
    start_time: Joi.string().regex(/^[a-zA-Z0-9_][a-zA-Z0-9_.]*/).required(),
    end_time: Joi.string().regex(/^[a-zA-Z0-9_][a-zA-Z0-9_.]*/).required()
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.createClassValidation = createClassValidation;

