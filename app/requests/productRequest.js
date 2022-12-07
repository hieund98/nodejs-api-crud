const {check, body, param, query} = require('express-validator');

const store = () => {
    return [
        body('name', 'nameIsRequire').not().isEmpty(),
        body('price', 'priceIsRequire').not().isEmpty(),
        body('price', 'priceIsInteger').isNumeric(),
        body('description', 'descriptionIsRequire').not().isEmpty(),
    ];
}

const update = () => {
    return [
        param('id', 'idIsRequire').not().isEmpty(),
        body('name', 'nameIsRequire').not().isEmpty(),
        body('price', 'priceIsRequire').not().isEmpty(),
        body('price', 'priceIsInteger').isNumeric(),
        body('description', 'descriptionIsRequire').not().isEmpty(),
    ];
}
let productRequest = {
    store,
    update
};

module.exports = { productRequest };
