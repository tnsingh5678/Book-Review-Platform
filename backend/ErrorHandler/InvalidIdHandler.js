export default async function InvalidIdHandler(res , id){
    return res.status(400).json({
        message : `${id} not found`
    })
}