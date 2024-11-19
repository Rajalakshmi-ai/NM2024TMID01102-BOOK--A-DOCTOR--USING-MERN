// const express = require("express");
// const colors = require("colors");
// const moragan = require("morgan");
// const dotenv = require("dotenv");
// const userRoutes = require('./routes/userRoute');
// const adminRoutes = require("./routes/adminRoute");
// const doctorRoutes = require("./routes/doctorRoute")
// const connectDb = require("./config/connectDb");
// const path = require("path");

// //dotenv conig
// dotenv.config();
// connectDb();

// //rest obejct
// const app = express();

// //middlewares
// app.use(express.json());
// app.use(moragan("dev"));

// //routes
// app.use("/api/user", userRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/doctor", doctorRoutes);

// //static files
// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// //port
// const PORT = process.env.PORT || 4001;
// //listen port
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


// app.js or index.js (main server file)
const express = require('express');
const app = express();

app.use(express.json());  // Middleware to parse JSON bodies

// Apply doctor route handler
app.post('/api/user/apply-doctor', async (req, res) => {
  try {
    const { userId, firstName, lastName, phone, email, starttime, endtime } = req.body;

    // Validate incoming data
    if (!userId || !firstName || !lastName || !phone || !email) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    // Your logic to save the doctor application
    // Replace saveDoctorApplication with your actual function to save data
    const result = await saveDoctorApplication(req.body);

    return res.status(200).json({ success: true, message: "Application submitted successfully" });

  } catch (error) {
    // Log the full error for debugging
    console.error("Error in apply-doctor API:", error);

    // Return a more detailed response to the client
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,  // Optional: include error message for more details
    });
  }
});

// Start your server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
