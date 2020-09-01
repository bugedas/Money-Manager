const { Router } = require('express');

const Shopping = require('../models/Shopping');

const router = Router();

router.get('/', async (req, res) => {

    try {
        const entries = await Shopping.find();
        res.json(entries);
    } catch (error) {
        next(error);
    }


});

router.post('/', async (req, res, next) => {
    try {
        const shopping = new Shopping(req.body);
        const createdEntry = await shopping.save();
        res.json(createdEntry);
    } catch (error) {
        console.log(error.name);
        if(error.name === 'ValidationError'){
            res.status(422);
        }
        next(error);
    }
});


module.exports = router;