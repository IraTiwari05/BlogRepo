import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb://user:Tilak@123@ac-enbge2v-shard-00-00.jale8gv.mongodb.net:27017,ac-enbge2v-shard-00-01.jale8gv.mongodb.net:27017,ac-enbge2v-shard-00-02.jale8gv.mongodb.net:27017/?ssl=true&replicaSet=atlas-x2jw8p-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blogWeb`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("error in connecting", error);
  }
};

export default Connection;
