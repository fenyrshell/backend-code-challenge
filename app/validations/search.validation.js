const { body, param, query } = require('express-validator');
const middleware = require(core_path('middlewares/express.middleware.js'));


/**
 * Search validations
 *
 * @returns ExpressValidations
 */
exports.search = [
    query('q')
    .if(query('q').exists())
    .isLength({ min: 0, max: 128 })
    .withMessage('La longitud debe ser máximo 128 caracteres'),


    query('latitude')
    .if(query('latitude').exists().not().isEmpty())
    .isNumeric()
    .withMessage('Dato inválido'),


    query('longitude')
    .if(query('longitude').exists().not().isEmpty())
    .isDecimal()
    .withMessage('Dato inválido'),


    middleware
];
