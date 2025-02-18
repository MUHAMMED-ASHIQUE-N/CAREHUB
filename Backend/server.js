const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db.js");
const dotenv = require("dotenv")
const {apiRouter} = require('./routes/index.js');



dotenv.config()
//midlewares
app.use(express.json());
app.use(cors());
connectDB();

app.use('/api',apiRouter);


const PORT = process.env.PORT || 7070;

app.listen(PORT, () => console.log(`surver is running on ${PORT}`));
