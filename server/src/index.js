const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const middlewares = require('./middlewares');
const Shoppings = require('./api/Shoppings');


const app = express();


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(helmet());
app.use(morgan('common'));
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        message: 'Hello World',
    });
});


app.use('/api/Shoppings', Shoppings);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1338;


app.listen(port, () => {
    console.log(`Listening at hhtp://localhost: ${port}`);
});