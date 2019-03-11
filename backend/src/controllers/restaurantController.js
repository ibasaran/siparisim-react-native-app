import Restaurant from '../models/Restaurant';

exports.createRestaurant = (req, res) => {
    const restaurant = new Restaurant({
        name: req.body.name,
        pic:req.file.filename,
        menu: req.body.menu
    });

    restaurant.save((err,restaurant) => {
        if (err) res.send({error:err});
        res.send({restaurant:restaurant});
    });

}