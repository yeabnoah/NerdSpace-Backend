const User = require("../model/userModel");

const getUserById = async (req, res) => {
  try {
    const { id: userId } = req.params;
    console.log("Requested userId:", userId);

    // Use async/await to wait for the database query to complete
    const userData = await User.findById(userId);

    if (!userData) {
      // If user not found, return a 404 response
      console.log("User not found");
      return res.status(404).json({ error: "User not found" });
    }

    // Return the user data
    res.json(userData);
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getUserById;
