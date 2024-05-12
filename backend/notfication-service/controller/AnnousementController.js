const asyncHandler = require("express-async-handler");
const Notfication = require('../module/NotficationModule')


const createAnnousement = asyncHandler(async(req,res)=>{
    try{
        console.log("Add notfication");
        const {title, annousement,category} = req.body

        const notfications =await Notfication.create({
            title:title,
            annousement:annousement,
            category:category
        })


        res.status(201).json(notfications)
        console.log(notfications);

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
        await Notfication.deleteOne({_id:notficationid});

        res.status(202).json({message: "This notfication deleted successfull"})

    }catch (error) {
        console.error("Error occour notfication:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})


//brodcast
const createBroatcast = asyncHandler(async(req,res)=>{
    try{
        console.log("Add notfication");
        const {title, annousement,category} = req.body

        const notfications =await Notfication.create({
            title:title,
            annousement:annousement,
            category:category,
            isBrostcast:true
        })


        res.status(201).json(notfications)
        console.log(notfications);

    }catch (error) {
        console.error("Error occour notfication:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
})



module.exports = {
    createAnnousement,
    getallNotfication,
    deleteNotficaton,
    createBroatcast

}