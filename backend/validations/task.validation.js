var Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const taskValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(6).max(50).required(),
    type: Joi.string().min(3).max(50).required(),
    status: Joi.string().min(3).max(50).required(),
    priority: Joi.number().integer().required(),
    start_time: Joi.date().required().greater(Date.now()),
    end_time: Joi.date().greater(Joi.ref('start_time')), //compare two dates
    users: Joi.array().items(Joi.objectId())
  });
  return schema.validate(data);
};

module.exports.taskValidation = taskValidation;