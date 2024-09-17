
const Restaurant = require('../Models/restaurant');

// Function to fetch all restaurants
exports.getAllRestaurants = (req, res) => {
    Restaurant.find()
        .then((result) => {
            res.status(200).json({
                message: "Restaurants fetched",
                restaurants: result,
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Error in Database",
                error: error,
            });
        });
};
// Function to filter restaurants based on city and restaurant ID
exports.getRestaurantByLocation = async (req, res) => {
    try {
        const list = await Restaurant.find({ location_id: req.params.city });
        res.status(200).json(list);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}
exports. getRestaurantsLocation = async (req, res) => {
    try {
        const { location_id } = req.params;
        const restaurants = await Restaurant.find({ location_id: location_id });
        res.status(200).json({ restaurants });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



exports.getRestaurantById = async (req, res) => {
    try {
        console.log("Requested Restaurant ID:", req.params.id);
        const restaurant = await Restaurant.find({ _id: req.params.id });
        if (!restaurant || restaurant.length === 0) {
            console.log("Restaurant not found for ID:", req.params.id);
            return res.status(404).send('Restaurant not found');
        }
        res.json(restaurant[0]); // Assuming you're expecting a single restaurant
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).send('Server error');
    }
};

exports.filter = async (req, res) => {
    let mealtype_id = req.body.mealtype_id;
    let  location_id = req.body.location_id;
    let  cuisine_id = req.body.cuisine_id;
    let  hcost = req.body.hcost;
    let  lcost = req.body.lcost;
    let  sort = req.body.sort ? req.body.sort : 1;
    let  page = req.body.page ? req.body.page : 1;
   
    let itemPerPage = 2;
    let startIndex = (page * itemPerPage) - itemPerPage;
    let endIndex = (page * itemPerPage);
    
    

    let payload = {};

    if(mealtype_id){
        payload = {mealtype_id: {$elemMatch: { mealtype: mealtype_id}}};
    }
    if(mealtype_id && location_id){
        payload = {
            mealtype_id: {$elemMatch: { mealtype: mealtype_id}},
            location_id : location_id
        }
    }
    if(mealtype_id && cuisine_id ){
        payload = {
            mealtype_id: {$elemMatch: { mealtype: mealtype_id}},
            cuisine_id: {$elemMatch: { cuisine: cuisine_id}},

            
        }
    }
    if(mealtype_id && hcost && lcost){
        payload = {
            mealtype_id: {$elemMatch: { mealtype: mealtype_id}},
            cost : {$lte: hcost, $gte : lcost}
        }
    }
    if(mealtype_id && cuisine_id && hcost && lcost){
        payload = {
            mealtype_id: {$elemMatch: { mealtype: mealtype_id}},
            cost : {$lte: hcost, $gte : lcost},
            cuisine_id: {$elemMatch: { cuisine: cuisine_id}},
        }
    }
    if(mealtype_id && location_id && cuisine_id){
        payload = {
            mealtype_id: {$elemMatch: { mealtype: mealtype_id}},
            location_id : location_id,
            cuisine_id: {$elemMatch: { cuisine: cuisine_id}}
        }
    }
    if(mealtype_id && location_id && hcost && lcost){
        payload = {
            mealtype_id: {$elemMatch: { mealtype: mealtype_id}},
            location_id : location_id,
            cost : {$lte: hcost, $gte : lcost}
        }
    }
    if(mealtype_id && location_id && cuisine_id && hcost && lcost){
        payload = {
            mealtype_id: {$elemMatch: { mealtype: mealtype_id}},
            location_id : location_id,
            cost : {$lte: hcost, $gte : lcost},
            cuisine_id: {$elemMatch: { cuisine: cuisine_id}}
        }
    }

    let list = await Restaurant.find(payload).sort({cost : sort});
        try{
        res.status(200).json(list);
    }catch(err){
        res.status(500).send(err);
    }
}

