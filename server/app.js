const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

require('dotenv').config();
const { PORT } = require('./config');

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//import routes
//const postsRoute = require('./routes/posts');
const RecordRoutes = require('./routes/RecordRoutes');

//Custom routes middleware
app.use('/records', RecordRoutes);

app.get('/', (req, res) => {
   res.send('we are home');
});

//const db = mongoose.connection;


// try {

//    db.collections.records.insertMany([
//       {
//          'artist': '22 Pistepirkko',
//          'title': 'Drops & Kicks',
//          'prodYear': '2005',
//          'label': 'Bone Voyage',
//          'origin': 'Egen samling',
//          'price': '20,5',
//          'recordNo': 'BONE-0021',
//          'numOfRecords': '2',
//          'released': ' '

//       },
//       {

//          'artist': '5 x Kaj',
//          'title': 'Sange Og Historier',
//          'prodYear': '1984',
//          'label': 'Sam Records',
//          'origin': 'Fået af Ernst',
//          'price': '20',
//          'recordNo': 'SAM 08',
//          'numOfRecords': ' ',
//          'released': ' '
//       }
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

