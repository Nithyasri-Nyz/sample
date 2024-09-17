const mongoose = require('mongoose');
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://nithyasri5143:Kavi15@nyz.ejqx5kj.mongodb.net/`
      , {
        useNewUrlParser: true,
        // useUnifiedTopology: true, debug: true
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }
  module.exports = connectDB;
  //const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, debug: true });
