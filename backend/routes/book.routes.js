import express from "express"
import Book from "../models/book.models.js";
import User from "../models/user.models.js";
import InvalidBookHandler from "../ErrorHandler/InvalidBookHandler.js";
import InvalidIdHandler from "../ErrorHandler/InvalidIdHandler.js";
import serverErrorHandler from "../ErrorHandler/serverErrorHandler.js";


const router = express.Router();

router.get('/' , async ( req , res ) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;

    try {
        const books = await Book.find().skip(skip).limit(limit);
        const totalBooks = await Book.countDocuments();

        res.status(200).json({
            message: "Books fetched successfully",
            currentPage: page,
            totalPages: Math.ceil(totalBooks / limit),
            totalBooks,
            books
        });
    } catch (error) {
        serverErrorHandler(res, error, "while fetching books");
    }
} )
router.get('/:bookId' , async ( req, res ) => {
    const { bookId } = req.params;
    try {
        if(!bookId){
            return InvalidIdHandler(res , "BookId")
        }
        const book = await Book.findById(bookId);
        if(!book){
            return InvalidBookHandler(res);
        }
        res.status(200).json({
            message : "Book Fetched successfully",
            book
        })
    } catch (error) {
        serverErrorHandler(res , error , "while fetcing a book")
    }
})
router.post('/' , async ( req , res ) => {
    const {userId , bookName , authorName , publisher , edition} = req.body;
    try {
        if(!userId || !bookName || !authorName || !publisher || !edition){
            res.status(400).json({
                message : "All fields are required"
            })
        }
        const user = await User.findById(userId);
        if(!user || !user.isAdmin){
            res.status(403).json({
                message : "User is not a Admin"
            })
        }
        const book = new Book({
            bookName,
            authorName,
            publisher,
            edition,
            Reviews : []
        });
        await book.save();
        res.status(200).json({
            message : "Book Added successfully"
        })
    } catch (error) {
        serverErrorHandler( res , error , "during new book addition")
    }
})

export default router;