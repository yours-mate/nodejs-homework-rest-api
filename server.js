const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const { PORT, DB_CONTACTS } = process.env;

// const connectToContactsDb = () => {
//   mongoose.set("strictQuery", false);
//   // console.log(process.env.DB_CONTACTS);
//   return mongoose.connect(DB_CONTACTS || "mongodb://127.0.0.1:27017");
// };

mongoose
  .connect(DB_CONTACTS)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server UP AND running. Use our API on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Database connection error:${err.message}`);
    process.exit(1);
  });
