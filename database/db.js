const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:admin@readlist.osxswm8.mongodb.net/?retryWrites=true&w=majority&appName=readlist"
    )
    .then(() => console.log("MongoDB Atlas conectado!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
