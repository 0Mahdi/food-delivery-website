import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://greatstack:4cKjDZpNUV8mLLzE@cluster0.ns1gi8b.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}