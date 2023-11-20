const Restaurant = require('../models/restaurant')

module.exports = {
    new: newRestaurant
}

function newRestaurant(req, res) {
    res.render('restaurants/new', { title:"Add Restaurant", errorMsg: ''})
}

