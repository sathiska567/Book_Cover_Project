const adminModel = require("../model/adminModel")

const getCurrentUserController = async(req,res)=>{
        try {

                const user = await adminModel.findOne({_id : req.body.id})
                console.log(user);
        
                if(!user){
                        res.status(404).send({
                        message : "User Cannot find !!",
                        success : false                
                        })
                }
        
                res.status(200).send({
                        message : "Details found",
                        success : true,
                        user
                })
                
           } catch (error) {
        
                res.status(400).send({
                        message : "Error while occure executing getCurrentUserController ",
                        success : false
                })
                
           }
}
module.exports = {getCurrentUserController}