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
const postsRoute = require('./routes/posts');

//Custom routes middleware
app.use('/posts', postsRoute);

app.get('/', (req, res) => {
   res.send('we are home');
});



mongoose.connect(
   process.env.DB_CONNECTION || 'mongodb://localhost/recordProject',
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


// mongoose.connection.on('connected', () => {
//    console.log('Mongoose default connection is open');
// });

// mongoose.connect(process.env.DB_CONNECTION,
//    { useNewUrlParser: true, useUnifiedTopology: true },
//    () => console.log('we are connected'));

// app.listen(PORT);