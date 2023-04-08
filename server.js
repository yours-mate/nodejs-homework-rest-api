const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const { PORT, DB_CONTACTS } = process.env;

const connectToContactsDb = (connection) => {
  mongoose.set("strictQuery", true);
  return mongoose.connect(connection);
};

connectToContactsDb(DB_CONTACTS)
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
