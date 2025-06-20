import mongoose from "mongoose"

const {Schema} = mongoose;

const ReviewSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "BOOKUSER",
        required: true
    },
    bookId : {
        type : Schema.Types.ObjectId,
        ref : "BOOK" , 
        required : true
    },
    rating : {
        type : Number,
        // 0 - 10,
        required : true
    },
    review : {
        type : String,
        required : true
    },
    userName : {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const Review = mongoose.model("REVIEW" , ReviewSchema)

export default Review;