const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
dotenv.load({ path: '.env' });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', () => {
    console.log('Veritabanı baglanti hatası');
});
db.once('open', function() {
    console.log('Veritabanı bağlantısı sağlandı.')
});


app.post('/json', (req,res)=> {
    console.log(req.body.id);
    res.send({'ok':'ok'});
});


app.listen(3000, () => {
    console.log('Server baslatildi.');
});