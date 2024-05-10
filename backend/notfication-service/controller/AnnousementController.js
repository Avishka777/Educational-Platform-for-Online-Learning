const asyncHandler = require("express-async-handler");
const Notfication = require('../module/NotficationModule')


const createAnnousement = asyncHandler(async(req,res)=>{
    try{
        const {title, annousement,category} = req.body

        const notfications = Notfication.create({
            title, annousement,category
        })

        res.status(201).json(notfications)

    }catch (error) {
        console.error("Error occour notfication:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})


const getallNotfication = asyncHandler(async(req,res)=>{
    try{
        const notfication = await Notfication.find()
        res.status(200).json(notfication)

    }catch (error) {
        console.error("Error occour notfication:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})


const deleteNotficaton = asyncHandler(async(req,res)=>{
    try{
        const notficationid = req.params.notficationid
        await Course.deleteOne({_id:notficationid});

        res.status(202).json({message: "This notfication deleted successfull"})

    }catch (error) {
        console.error("Error occour notfication:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})



module.exports = {
    createAnnousement,
    getallNotfication,
    deleteNotficaton

}