const Restaurant = require('../models/restaurant')

module.exports = {
    new: newRestaurant,
    create
}

function newRestaurant(req, res) {
    res.render('restaurants/new', { title:"Add Restaurant", errorMsg: ''})
}

async function create(req,res) {
    try {
        const restaurant = await Restaurant.create(req.body)
        console.log(restaurant)
        res.send('This worked!')
    } catch(err) {
        console.log('create error', err)
    }
}