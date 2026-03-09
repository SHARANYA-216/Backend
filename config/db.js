import mongoose from "mongoose"; // method to connect to mongodb atlas
const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
    } catch (err){
        console.log(err);
    }
};
export default dbConnect; //writen for dbConnect