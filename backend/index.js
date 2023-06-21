const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri =
  "mongodb+srv://wnguyen5:GMUislife@cluster0.jssx574.mongodb.net/?retryWrites=true&w=majority";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  zipcode: String
});

const UserModel = mongoose.model('User', userSchema);

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.use(express.json());

app.post('/SignUp', async (req, res) => {
  try {
    const { name, email, password, zipcode } = req.body;
    // Save the data to the MongoDB database using Mongoose
    const data = await UserModel.create({ name, email, password, zipcode });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving data' });
  }
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
