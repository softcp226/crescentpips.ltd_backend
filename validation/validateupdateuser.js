const Joi = require("joi");

const validateupdateUser = (req) => {
  const Schema = Joi.object({
    user: Joi.string().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().required(),
    phone_number: Joi.string().required(),
  }).options({ stripUnknown: true });
  const result = Schema.validate({
    user: req.user,
    first_name: req.first_name,
    last_name:req.last_name,
    email: req.email,
    phone_number: req.phone_number,
  });

  if (result.error) return result.error.message;
  return true;
};

module.exports = validateupdateUser;
