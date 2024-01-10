const adminModel = require("../model/adminModel");
const bcrypt = require("bcrypt");

const changePasswordController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!password){
                return res.status(404).send({
                        success: false,
                        message: "Please Enter Password",
                    }); 
        }

        console.log(email, password);

        const user = await adminModel.findOne({ email });


        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        // hash new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user.password = hashedPassword;
        await user.save();

        res.status(200).send({
            success: true,
            message: "Password changed successfully",
            user,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Password change failed",
            error: error.message,
        });
    }
};

module.exports = changePasswordController;
