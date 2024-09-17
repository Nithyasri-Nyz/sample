const router = require("express").Router()
const controller = require('../controller/locations')
const restaurant = require('../controller/restaurant')
const mealtype = require('../controller/melatype')
const userMethod = (require('../controller/userController'))
// const filtloc = require('../controller/restaurant')
// const place = require('../controller/getlocation')


//   .('/', controller.createTask)
router.get('/getLocations', controller.getLocations)//localhost:5000/getLocations/controller/locations
router.get('/getrestaurant', restaurant.getAllRestaurants)
router.get('/getrestaurantId/:id', restaurant.getRestaurantById)
router.post('/filter', restaurant.filter);
router.get('/getmealtype', mealtype.getallMealtype)
router.get('/getplace/:id', restaurant.getRestaurantByLocation)
router.get('/getplace1/:location_id', restaurant.getRestaurantsLocation)
router.post('/signin',userMethod.logIn)
router.post('/signup',userMethod.signUp)
router.post('/filter/:id', restaurant.filter)

module.exports = router