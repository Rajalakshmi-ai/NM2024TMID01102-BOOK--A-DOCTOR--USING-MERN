// const express = require("express");
// const {
//   loginController,
//   registerController,
//   authController,
//   applyDoctorController,
//   getAllNotificationController,
//   deleteAllNotificationController,
//   getAllDocotrsController,
//   bookAppointmentController,
//   bookingAvailabilityController,
//   userAppointmentsController,
// } = require("../controllers/userController");
// const authMiddleware = require("../middlewares/authMiddleware");

// //router object
// const router = express.Router();

// //routes
// // POST || LOGIN USER
// router.post("/login", loginController);

// //POST || REGISTER USER
// router.post("/register", registerController);

// //Auth || POST
// router.post("/getUserData", authMiddleware, authController);

// //Apply Doctor || POST
// router.post("/apply-doctor", authMiddleware, applyDoctorController);

// //Notifiaction  Doctor || POST
// router.post("/get-all-notification", authMiddleware, getAllNotificationController);

// //Notifiaction  Doctor || POST
// router.post("/delete-all-notification", authMiddleware, deleteAllNotificationController);

// //GET ALL DOC
// router.get("/getAllDoctors", authMiddleware, getAllDocotrsController);

// //BOOK APPOINTMENT
// router.post("/book-appointment", authMiddleware, bookAppointmentController);

// //Booking Avliability
// router.post("/booking-availbility", authMiddleware, bookingAvailabilityController);

// //Appointments List
// router.get("/user-appointments", authMiddleware, userAppointmentsController);

// module.exports = router;

// routes/userRoutes.js
const express = require('express');
const router = express.Router();

router.post('/apply-doctor', async (req, res) => {
  try {
    const { userId, firstName, lastName, phone, email, starttime, endtime } = req.body;

    // Validate incoming data
    if (!userId || !firstName || !lastName || !phone || !email) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    // Your logic to save the doctor application
    const result = await saveDoctorApplication(req.body);

    return res.status(200).json({ success: true, message: "Application submitted successfully" });

  } catch (error) {
    // Log the full error for debugging
    console.error("Error in apply-doctor API:", error);

    // Return a more detailed response to the client
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

module.exports = router;
