export default async function InvalidBookHandler(res){
    return res.status(400).json({
                message : "Invalid BookId found"
            })
}