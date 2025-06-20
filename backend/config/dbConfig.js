import mongoose from "mongoose"

const dbConnection = async () => {
    mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Database connected succesfully")
}).catch((err) => {
    console.log("Error during connection with database . Error : ",err)
})

}
export default dbConnection;