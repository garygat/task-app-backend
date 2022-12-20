// ! MODULES/VAR DECS
const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB');
const port = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const Task = require('./models/taskModel');
const deletedTask = require('./models/deletedTaskModel');
// const taskRoutes = require(`./routes/taskRoute`);
// const deletedRoutes = require('./routes/deletedRoute');
const cors = require('cors');

//! MIDDLEWARE
console.log(process.env.MONGO_URI);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/api/tasks', require(`./routes/taskRoute`));
app.use('/api/deleted', require(`./routes/deletedRoute`));
// # FOR POSTMAN/INSOMNIA
// app.get(`/api/deleted`, async (req, res) => {
//   try {
//     const delTasks = await deletedTask.find({});
//     res.status(200).json(delTasks);
//   } catch (error) {
//     res.status(500).json({ msg: error.message });
//   }
// });
// # FOR POSTMAN/INSOMNIA
app.post(`/api/deleted`, async (req, res) => {
  try {
    const delTasks = await deletedTask.create(req.body);
    res.status(200).json(delTasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//!ROUTES
app.get(`/`, (req, res) => {
  res.send(`Home Page`);
});
app.get(`/deleted`, (req, res) => {
  res.send('pota');
});

//! TASK

//! CONNECT DB AWAIT SERVER
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
