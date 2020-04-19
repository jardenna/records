const express = require('express');
const mongoose = require('mongoose');


const path = require('path');

const cors = require('cors');


require('dotenv').config();
const { PORT } = require('./config');

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './', 'public')));


//import routes

const RecordRoutes = require('./routes/RecordRoutes');
const userRoutes = require('./routes/UserRoutes');
const homeRoute = require('./routes/homeRoute');


//Custom routes middleware
app.use('/records', RecordRoutes);
app.use('/user', userRoutes);
app.use('/', homeRoute);





// app.get('/', (_, res) => {
//    res.send('we are home');
// });

//const db = mongoose.connection;


// try {

//    db.collections.records.insertMany([



// {
//    "artist": "Rainbow",
//       "title": "Difficult To Cure",
//          "prodYear": "1981",
//             "label": "Polydor",
//                "origin": "Blå Kors Borgergade",
//                   "price": "5",
//                      "recordNo": "2391 506",
//                         "numOfRecords": " ",
//                            "released": " ",
//                               "info": "",
//                                  "cover": " "
// }
//    ]
//    );
// } catch (e) {
//    console.log(e);
// }



mongoose.connect(
   `mongodb+srv://helle:${process.env.API_KEY}@cluster0-pimzw.mongodb.net/recordproject?retryWrites=true&w=majority` || 'mongodb://localhost/recordProject',
   { useNewUrlParser: true, useUnifiedTopology: true })
   .then(
      () => {
         console.log('Mongo has conneced');
         return app.listen(PORT);
      }
   );
mongoose.connection.on('connected', () => {
   console.log('Connected to MongoDB');
});

