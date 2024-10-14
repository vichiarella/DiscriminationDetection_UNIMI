const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit')
const path = require('path')

const jobPosts = require('./routes/jobpost');
const annotators = require('./routes/annotator');
const backgrounds = require('./routes/background');
const roles = require('./routes/role');
const domains = require('./routes/domain');
const annotations = require('./routes/annotation');
const dataprovider = require('./routes/dataprovider');
const labelprovider = require('./routes/label');
const configuration = require('./routes/configuration');


const limiter = rateLimit.rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 1000, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})



const db = require('./config/mongodbClient');
db()
const app = express();
const port = process.env.PORT || 8000;

// Import the singleton database connection
const corsOptions = {
  origin: '*', // Replace with your frontend's domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

// Use CORS middleware with options
app.use(cors(corsOptions));

app.use(limiter)

app.use(express.json());

app.use('/api/jobPosts', jobPosts);
app.use('/api/annotators', annotators);
app.use('/api/annotations', annotations);
app.use('/api/backgrounds', backgrounds);
app.use('/api/roles', roles);
app.use('/api/domains', domains);
app.use('/api/dataproviders',dataprovider)
app.use('/api/labels', labelprovider)
app.use('/api/configurations', configuration)
// Your routes and middleware here

app.use(express.static(path.resolve(__dirname, '../../annotations_front/dd_llm/build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../annotations_front/dd_llm/build', 'index.html'));
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});