import express from "express"
import Book from "../models/book.models.js";
import User from "../models/user.models.js";
import InvalidBookHandler from "../ErrorHandler/InvalidBookHandler.js";
import InvalidIdHandler from "../ErrorHandler/InvalidIdHandler.js";
import Review from "../models/review.models.js";
import serverErrorHandler from "../ErrorHandler/serverErrorHandler.js";

const router = express.Router();

router.get('/:bookId' , async (req , res) => {
    const { bookId } = req.params;
    try {
        if(!bookId){
            return InvalidIdHandler(res , "BookId");
        }
        const book = await Book.findById(bookId);
        if(!book){
            return InvalidBookHandler( res );
        }
        const data = await Promise.all(
            book.Reviews.map((reviewId) => Review.findById(reviewId))
        );

        res.status(200).json({
            message : "Book reviews fetched successfully",
            data
        })
    } catch (error) {
        serverErrorHandler(res , error , "during fetching book reviews")
    }
})
router.post('/' , async ( req , res) => {
    const {userId , bookId , rating , msg} = req.body;
    try {
        if(!userId || !bookId || !rating || !msg){
            return res.status(400).json({
                message : "All fields are required"
            })
        }
        const book = await Book.findById(bookId);
        const user = await User.findById(userId);
        const newReview = new Review({
            userId,
            bookId,
            rating,
            review : msg,
            userName : user.userName
        })
        
        user.Reviews.push(newReview._id)
        book.Reviews.push(newReview._id)
        Promise.all([newReview.save(),book.save() , user.save()]);
    
        return res.status(200).json({
            message : "New Review added successfully"
        })
    
    } catch (error) {
        serverErrorHandler(res , error , "during adding new review")
    }
})

export default router;