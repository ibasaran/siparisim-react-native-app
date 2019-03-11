import mongoose from 'mongoose';

export default () => {
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', () => {
        console.log('Veritabanı baglanti hatası');
    });
    db.once('open', function() {
        console.log('Veritabanı bağlantısı sağlandı.')
    });
}