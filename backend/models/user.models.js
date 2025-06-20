import mongoose from "mongoose"

const {Schema} = mongoose;
const userSchema = new Schema({
    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
    },
    Reviews : {
        type : [Schema.Types.ObjectId],
        ref : 'REVIEW'
    },
    isAdmin : {
        type : Boolean,
        default : false
    }
},{
    timestamps : true
})

const User = mongoose.model('BOOKUSER' , userSchema)

export default User;