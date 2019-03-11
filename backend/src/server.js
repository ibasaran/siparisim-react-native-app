import express from 'express';
import db from './config/db';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routes';
import path from 'path';

const app = express();
dotenv.load({ path: '.env' });
const PORT = process.env.PORT || 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "10mb" ,extended: true }));
app.use(express.static(path.join(__dirname, '../media')));

db();

router(app);

app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Sunucu baslatildi.');
    }
});