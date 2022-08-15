const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express(); 

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
mongoose.connect("mongodb://localhost:27017/exoketo", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message));

