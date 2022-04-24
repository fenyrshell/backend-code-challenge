var router = require('express').Router();
const controller = require(app_path('controllers/search.controller.js'));
const validation = require(app_path('validations/search.validation.js'));


router.group('/backend-code-challenge', (router) => {
    router.get('/search', validation.search, controller.search);
});


module.exports = router;
