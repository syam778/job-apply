import express from 'express';  // Import express (ensure you have "type": "module" in package.json or use .mjs extension)
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './db.js';
import job from './job.js';
const app = express(); // Create an instance of an Express app
const PORT = 3000;
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


