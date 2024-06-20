const userModel = require("../models/userModel");
const inventoryModel = require("../models/inventoryModel");

//create invertory
const createInventoryController = async(res,req)=>{
    try{
        const {email,inventoryType} = req.body
        //validation
        const user = await userModel.findOne({email})
        if(!user)
        {
            throw new Error("User not found");
        }
        if(inventoryType === "in" && user.role !== "donor")
        {
            throw new Error("not a donor account")
        }
        if(inventoryType === "out" && user.role !== "hospital")
        {
            throw new Error("not hospital account")
        }
        //save record
        const inventory = new inventoryModel(req.body);
        await inventory.save();
        return res.status(201).send({
            success:true,
            message:"New Blood Record Added",
            
        });
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error while create inventory",
            error
        })
    }
}

const getInventoryController =async()=>{
    try{
        const inventory = await inventoryModel.find({
            organisation:req.body.userId,
        });
        return res.status(200).send({
            success:true,
            message:"get all records successfully",
            inventory,
        });
    }
    catch(error)
    {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error in get all inventory",
            error
        });
    }
}

module.exports={createInventoryController,getInventoryController};