const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`,
      {
        w: "majority", // Specify the correct write concern value
        wtimeoutMS: 0,
      }
    );

    if (conn) {
      console.log(`MongoDB is connected ${conn.connection.host}`);
    } else {
      console.log("Failed to connect DB");
    }
  } catch (error) {
    console.log(`Failed with error : ${error.message}`);
  }
};

module.exports = connectDB;
