require("dotenv").config();
const mongoose = require("mongoose");
const fs=require("fs")



function logError(error) {
    const errorMessage = `[${new Date().toISOString()}] Error: ${error.message || error}\n`;

    // Path to your log file, adjust the path as needed
    const logFilePath = './error_page.txt'; // This writes in the current directory

    // Append the error message to the log file
    fs.appendFile(logFilePath, errorMessage, (err) => {
        if (err) {
            console.error('Failed to log error:', err);
        }
    });
}

// Example of a code that may throw an error
// try {
//     // Simulating an error (you can replace this with actual code that might throw)
//     throw new Error("This is a test error!");
// } catch (error) {
//     // Log the error
//     logError(error);
// }

mongoose.set("strictQuery", false);
// const config = require("config");
const connectDB = (message) => {
  const db_link = process.env.db_Url;
  // console.log(db_link);
  // const db_link = config.get("db_Url");
  mongoose
    .connect(db_link)
    .then(() =>{
       console.log(message)
      logError(message)
      })
    .catch((err) => {
      logError(err.message)
      console.log(err)});
};
module.exports = connectDB;
