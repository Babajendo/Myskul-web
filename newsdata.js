const Joi = require('joi')

function ValidateNewsTable(data) {
    const ValidateNewsSchema = Joi.object({
        title: Joi.string().required(),
        images: Joi.string(),
        shows: Joi.string(),
        storey: Joi.string(),
        dreg: Joi.string(),
        category: Joi.string(),
        category_id: Joi.int(),
        views: Joi.string(),
        delete: Joi.string(),
        imp: Joi.string(),
        breakingnews: Joi.string(),
        newsexpiry: Joi.string(),
        impeg: Joi.string(),
        skid: Joi.string(),
        docklenk: Joi.string(),
        type: Joi.string(),
        newsdetails: Joi.string(),
        multiimage: Joi.string(),


        //password: Joi.string().required(),
        //phone: Joi.string().required(),
        //repeat_password: Joi.ref('password')
    });
    return ValidateNewsSchema.Validate(data);
}

module.exports = ValidateNewsTable