const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db');

//dev
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: './.env' });
app.use(cors());
app.use(express.json());
app.use(express.static('/public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// const router = require('./routes');
// app.use(router);

const server = app.listen(process.env.PORT || 8888, () => {
  console.log(`Express running → On PORT : ${server.address().port}`);
});
