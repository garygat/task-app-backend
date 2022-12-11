// ! MODULES/VAR DECS
const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB');
const port = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const Task = require('./models/taskModel');
const taskRoutes = require(`./routes/taskRoute`);
const cors = require('cors');

//! MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/tasks', taskRoutes);

// const logger = (req, res, next) => {
//   console.log('Middleware active');
//   console.log(req.method);
//
// next();
// };

//!ROUTES
app.get(`/`, (req, res) => {
  res.send(`Home Page`);
});

//! TASK

//! CONNECT DB THEN SERVER
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(`DB CONNECTED`))
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
