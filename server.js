const express = require('express');
const app = express();
const port = 3000;

const mongoose = require("mongoose")
const nameModel = require("./models/names_schema")

let url = 'mongodb://localhost:27017/pbdb';

app.use('/', express.static('public'));
app.use(express.json());

var fetch = require('./server.json');

app.get('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    nameModel.find().exec().then(data=>{
        res.json(data);   
        mongoose.connection.close();
    })
    .catch((error) => {
        console.log(error);
    });
})
.catch((error) => {
    console.log(error);
});
});

app.post('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    var newData = new nameModel({title: req.body.title, budget: req.body.budget, color: req.body.color});
    nameModel.insertMany(newData).then(data=>{
        res.send('Inserted')
        mongoose.connection.close();
    })
    .catch((error) => {
        console.log(error);
    });
})
.catch((error) => {
    console.log(error);
});
});

app.listen(port, () => {
    console.log('API served at http://localhost:', +port);
});