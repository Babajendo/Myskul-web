const Joi = require('joi')

function ValidateScrollingTable(data){
    const ValidateScrollingSchema = Joi.object({
        imgs: Joi.string().required(),
        smtext: Joi.string(),
        lgtext: Joi.string(),
        lenktext: Joi.string(),
        dele: Joi.string(),
        shows: Joi.string(),
    });
    return ValidateScrollingSchema.validate(data)
}

module.exports = ValidateScrollingTable;