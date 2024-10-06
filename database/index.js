import mongoose from "mongoose";


const mongodb_url = process.env.MONGODB_URL


async function connectToDB(){
    mongoose.connect(mongodb_url).then(()=>{
        console.log("Connect To DB");
    }).catch((error)=>{
        console.log(error);
    })
}


export default connectToDB;