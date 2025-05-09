const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const locationSchema = new Schema({
   
        name: { 
            type: String, 
            required: true 
        },
        city_id: { 
            type: Number, 
            required: true 
        },
        location_id: { 
            type: Number, 
            required: true },
        city: { 
            type: String, 
            required: true 
        },
        country_name: { 
            type: String, 
            required: true 
        }
      });
      
      

      const Location = mongoose.model('Location', locationSchema);
      
      module.exports = Location;