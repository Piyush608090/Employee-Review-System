import mongoose from "mongoose"

const connectToMongoose = async () =>{
    mongoose.connect("mongodb://localhost:27017/employees")
    .then(() => console.log('Mongoose is connectecd'));
}
export default connectToMongoose;
