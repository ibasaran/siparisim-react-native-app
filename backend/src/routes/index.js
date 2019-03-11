import restaurantController from '../controllers/restaurantController';
import express from 'express';
import multer from 'multer';

module.exports = (app) => {

    let router = express.Router();

    let storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'media/')
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now())
        }
    });
    let upload = multer({ storage: storage });

    router.post('/createRestaurant', upload.single('image'),restaurantController.createRestaurant);

    app.use(router);

}