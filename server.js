const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const userAuth = require('./middlewares/auth');
const api = require('./api');

const app = express();

// parse application/json
app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost/to_do_list')
mongoose.connect(process.env.MONGO_DB_URI)
.then(()=>console.log("mongoDB connected"))
.catch(err=>console.log(err));

// middleware to accept all apis
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","*");
  res.header("Access-Control-Allow-Methods","*");
  next();
});

app.use('/api', userAuth, api);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`Server started on port ${port}`));
