const moongose = require("mongoose");

const connectDB = async () => {
  await moongose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });
  console.log("MongoDb Connected");
};

module.exports = connectDB;
