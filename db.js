import mongoose from 'mongoose';
//const mongoURL = 'mongodb://localhost:27017/job'
const mongoURL = 'mongodb+srv://syama777:syama777>@cluster0.eisgw.mongodb.net/'
/*mongoose.connect('mongodb://localhost:27017/api/job' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connect('mongodb+srv://syama777:syama7778>@cluster0.eisgw.mongodb.net/job' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
*/
mongoose.connect('mongodb://localhost:27017/person', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('connected', () => {
    console.log('db connected');
})
db.on('disconnected', () => {
    console.log('db disconnected');
});
db.on('error', () => {
    console.log('db error', err);

});
    
export default db;

/*

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
/*const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connect('mongodb+srv://Syama:syama7778@cluster0.pxnxt.mongodb.net/job' , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
 

mongoose.connect('mongodb://localhost:27017/job', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



const db = mongoose.connection;
db.on('connected', () => {
    console.log('db connected');
})
db.on('disconnected', () => {
    console.log('db disconnected');
});
db.on('error', () => {
    console.log('db error', err);

});
    
export default db;
/*
import mongoose from 'mongoose';

// MongoDB connection URI
const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/yourdb';

// Connect to MongoDB
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection error:', err); // Log the error
  });

// Event listeners for connection
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to the database');
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection is disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error('Database error:', err); // Properly handle error here
});

export default mongoose;
*/
/*import express from 'express';  // Import express (ensure you have "type": "module" in package.json or use .mjs extension)
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db.js';
import job from './job.js';
import dotenv from 'dotenv';
const app = express(); 
dotenv.config();// Create an instance of an Express app
const PORT = process.env.PORT || 3000;
app.use(cors());
//app.use(express.json());
app.use(bodyParser.json())
// Define a route for the home page
app.get('/', (req, res) => {
  res.send('i am syama');
});
app.post('/pok', (req, res) => { // Ensure you're capturing data from the request body
  console.log(req.body)
  res.send('i my song');
});
app.get('/only', function (req, res) {
  res.send('welcome to / only')
})
app.get('/pop', function (req, res) {
  res.send(' welcome to hi pop')
})
app.post('/pop', function (req, res) {
  console.log('post is running')
  res.send(' welcome to hi post')
})
app.get('/chicken', function (req, res) {
  var chicken = {
    name: 'grilled chicken',
    size: '10mm',
    masal: 'chicken'
  }

  res.send(chicken)
})
/*app.get('/job', async (req, res) => {
  try {
    // Example: Fetching from a database
    const people = await Person.find();
    res.json(people);
    console.error('sucess');
  } catch (error) {
    console.error('Error in /person route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/job', async (req, res) => {
  try {
    const data = req.body
    const newjob = new person(data);
    const response = await newjob.save();
    console.log('data saved');
    res.status(200).json(response);

  } catch (err) {
    console.log('error')
    res.status(500).json({ error: 'internal server error' });
  }
});
*/
/*
app.get('/job', async (req, res) => {
  try {
    const people = await job.find();
    res.json(people);
    console.log('People fetched successfully');
  } catch (error) {
    console.error('Error in /person GET route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/job', async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: 'Request body cannot be empty' });
    }

    const data = req.body;
    const newjob = new job(data);
    const response = await newjob.save();
    console.log('Data saved');
    res.status(200).json(response);
  } catch (error) {
    console.error('Error in /person POST route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Set the app to listen on a specific por
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
*/
