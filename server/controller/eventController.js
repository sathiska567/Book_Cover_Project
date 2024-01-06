const createEventDetailsModel = require("../model/eventModel");

const createEventController = async (req, res) => {
  try {
    // Ensure that the required fields are present in req.body
    const { EventName, EventLocation, EventDescription, EventDate } = req.body;

  console.log(EventDate,EventDescription,EventLocation,EventName);

    if (!EventName || !EventLocation || !EventDescription || !EventDate) {
      return res.status(400).send({
        success: false,
        message: "Missing required fields in the request body",
      });
    }

    // Create an instance of the event model
    const createEventDetails = new createEventDetailsModel({
      EventName,
      EventLocation,
      EventDescription,
      EventDate,
    });

    // Save the event details
    await createEventDetails.save();

    // Send a success response
    res.status(200).send({
      success: true,
      message: "Event Details Updated",
      createEventDetails,
    });
  } 
  
  catch (error) {
    console.error("Error in createEventController:", error);

    // Send an error response
    res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.message, // Optionally include error details in the response
    });
  }
};

module.exports = { createEventController };
