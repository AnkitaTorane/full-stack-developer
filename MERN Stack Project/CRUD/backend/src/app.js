// Import required packages
const express = require("express"); // Express framework for Node.js
const mongoose = require("mongoose"); // Mongoose for MongoDB object modeling
const cors = require("cors"); // CORS to allow cross-origin requests


const app = express(); // Initialize Express application
const PORT = 8080; // Define the port number for running the server



// Middleware setups
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Enable parsing of JSON request bodies

// Connect to MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/crud-db")
    .then(() => console.log("MongoDB Connected")) // Success message if connection is successful
    .catch((err) => console.log("MongoDB Connection Error:", err)); // Error message if connection fails

// Start the Express server
app.listen(PORT, () => {
    console.log("Server is running on", PORT);
});

// Define MongoDB schema and model for Users
const UsersSchema = new mongoose.Schema({
    name: String,  // User's name as a string
    email: String, // User's email as a string
    age: Number    // User's age as a number
});

// Create a User model based on the schema
const User = mongoose.model("User", UsersSchema);

// Create User API (POST request) - Adds a new user to the database
app.post("/api/create-user", async (req, res) => { // Corrected missing forward slash in route
    try {
        // Extract user details from the request body
        const { name, email, age } = req.body;

        // Create a new User instance with provided data
        const newUser = new User({
            name,
            email,
            age
        });

        // Save the user to the database
        await newUser.save();

        // Send success response with the created user data
        res.status(201).json({ message: "User added successfully", data: newUser });
    } catch (error) {
        // Handle any errors and send an error response
        res.status(500).json({ message: "Internal Server Error", error });
    }
});

// Get  all users API (Get request) - retrieves all users from the database 
app.get("/api/get-all-users", async (req, res) => {
    try {
        //Fetch all users from the database
        const userslist = await User.find();

        //send sucess responce with retireved users
        res.status(200).json({ message: "users retireved successfully", data: users });

    } catch (error) {
        //Handle any errors and send an error responce 
        res.status(500).json({ message: "Internal Server Error", error });


    }
});
 app.delete("/api/delete-user/:id", async(req,res)=> {
try {
    const deleteUser = await User.findByIdAndDeleted(req.params.id)
if(deleteUser){
    res.status(200).json({message: "User deleted successfully"});
}else{
    res.status(404).json({message: "User not found"});
}

} catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
}
    
 })