const Mealtype = require('../Models/mealtype')

exports.getallMealtype = (req, res) => {
    Mealtype.find().then((result) => {

        res.status(200).json({
            message: "Mealtype fetched",
            Mealtype: result,
        });
    })
        .catch((error) => {
            res.status(500).json({
                message: "Error in Database",
                error: error,
            });
        });
};