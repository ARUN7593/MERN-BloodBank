const testController = (req,res)=>{
    res.status(200).send({
        message:"welcome admin",
        success:true,
    });
};

module.exports = {testController};