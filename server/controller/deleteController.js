const requestModel = require("../model/requestModel");
const reviewModel = require("../model/reviewModel");

const deleteController = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(id);

    const deletedUser = await requestModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).send({
        success: false,
        message: "User not found for deletion",
      });
    }

    res.status(200).send({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Delete has some error",
      error,
    });
  }
};


const deleteReviewController = async(req,res)=>{
    try {
      const {id} = req.body;
      console.log(id);
      const deletedUser = await reviewModel.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).send({
        success: false,
        message: "User not found for deletion",
      });
    }

    res.status(200).send({
      success: true,
      message: "Deleted successfully",

    });

    } catch (error) {
      res.status(400).send({
        success: false,
        message: "Delet Unsuccessfully",
  
      });
    }

}

module.exports = { deleteController,deleteReviewController };
