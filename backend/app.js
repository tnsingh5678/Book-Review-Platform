import express, { urlencoded } from "express"
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "./routes/user.routes.js"
import bookRoutes from "./routes/book.routes.js"
import reviewRoutes from "./routes/review.routes.js"
import dbConnection from "./config/dbConfig.js"
const app = express();
dotenv.config();
dbConnection();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/users',userRoutes)
app.use('/books',bookRoutes)
app.use('/reviews',reviewRoutes)

app.listen(process.env.PORT , ()=> {
    console.log("Server running at port : " , process.env.PORT)
})
