const express = require('express');
const connectDB = require('./data');

const cors = require('cors');
// express
const app = express();
//body parser
app.use(express.json());
//connect to database
connectDB();
app.use(cors());

// Alternatively, you can configure it with options
app.use(cors({
    origin: 'http://localhost:3000'  // Allow only this origin
}));

const routers = require('./view/index')
app.use('/', routers)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));