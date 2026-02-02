const mongoose = require("mongoose");

const mongoUri = process.env.MONGO_URI;

const dbConnect = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("Establecida una conexión a BBDD");
  } catch (error) {
    throw new Error("Error de conexión a BBDD", { cause: error });
  }
};

module.exports = dbConnect;

//copien el repo
//https://github.com/Joseg789/team-challenge-mongoose-testing
