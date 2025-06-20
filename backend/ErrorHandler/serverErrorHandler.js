export default async function serverErrorHandler( res , error , msg) {
    return res.status(500).json({
        message : `Server error ${msg}`,
        error : error.message
    })
}