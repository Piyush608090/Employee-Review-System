import mongoose from "mongoose"

const connectToMongoose = async () =>{
    mongoose.connect("mongodb://127.0.0.1:27017/employees")
    .then(() => console.log('Mongoose is connectecd'));
}
export default connectToMongoose;
