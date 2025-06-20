import mongoose from "mongoose"

const {Schema} = mongoose;

const bookSchema = new Schema({
    bookName : {
        type : String ,
        required : true,

    },
    authorName : {
        type : [String] ,
        required : true
    },
    publisher : {
        type : String ,
        required : true
    },
    edition : {
        type : String ,
        required : true
    },
    Reviews : {
        type : [Schema.Types.ObjectId],
        ref : 'Review'
    }
},{
    timestamps: true
})

const Book = mongoose.model("BOOK" , bookSchema);
export default Book;