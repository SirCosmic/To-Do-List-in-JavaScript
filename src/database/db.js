import mongoose from "mongoose";

async function connectToDatabase() {
  await mongoose.connect(
    "mongodb://guilhermetrajanog27_db_user:2mEJ0cnFBHoazIfe@ac-oqb8xju-shard-00-00.wf4yacf.mongodb.net:27017,ac-oqb8xju-shard-00-01.wf4yacf.mongodb.net:27017,ac-oqb8xju-shard-00-02.wf4yacf.mongodb.net:27017/?ssl=true&replicaSet=atlas-1268lx-shard-0&authSource=admin&appName=Cluster0"
    );
}

export default connectToDatabase;