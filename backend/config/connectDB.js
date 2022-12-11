const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

// !MONGO ASYNC
// const startServer = async () => {
//   try {
//     await connectDB();
//     // # LISTENER
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// startServer();
