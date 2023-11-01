const Joi = require("joi");

const validateNewsTable = (data) => {
  const ValidateNewsSchema = Joi.object({
    news_id: Joi.string().required(),
    titl: Joi.string().required(),
    imgs: Joi.string(),
    shows: Joi.string(),
    storey: Joi.string(),
    dreg: Joi.string(),
    categ: Joi.string(),
    categ_id: Joi.number(),
    viewz: Joi.string(),
    dele: Joi.string(),
    imp: Joi.string(),
    breakingnews: Joi.string(),
    news_expiry: Joi.string(),
    impeg: Joi.string(),
    skid: Joi.string(),
    docklenk: Joi.string(),
    typee: Joi.string(),
    newsdetails: Joi.string(),
    multimage: Joi.string(),
  });

  return ValidateNewsSchema.validate(data);
};

module.exports = validateNewsTable;
