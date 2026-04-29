import mongoose from "mongoose";


function dbConnection() {
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        console.log("connected to mongodb");
    }).catch(err => {
        console.error(err);
    });
};

export default dbConnection;