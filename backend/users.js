const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://mdhrami:asGmykcq7SIHABCb@cs321.xeodoer.mongodb.net/MarketBot?retryWrites=true&w=majority'

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
  
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB Atlas');
});

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    name: String,
    zip: String,
    email: String,
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

// Create a model for the collection
const User = mongoose.model('User', UserSchema, 'Users');

async function getObjectID(username, password) {
    try {
      const user = await User.findOne({ username });
      
      if (!user) {
        return "Invalid"; // username not found
      }
  
      const passwordMatch = password === user.password;
  
      if (passwordMatch) {
        return user._id; // valid username and password
      } else {
        return "Invalid"; // invalid password
      }
    } catch (error) {
      console.error(error);
    }
  }

async function addUser(username, password, name, zip, email) {
    try {
        const user = new User({
            username: username,
            password: password,
            name: name,
            zip: zip,
            email: email,
        });
        const result = await user.save();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

async function getUser(id) {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.error(error);
    }
}

(async function() {
    try {
        const objectID = await getObjectID('Mario', 'cs321');
        console.log(objectID);

        if (objectID != "Invalid") {
            const user = await getUser(objectID);
            console.log(user);
        }

        await addUser('Will', '12345', 'William', '20133', 'will@gmu.edu');
        
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
    }
})();

module.exports = { getObjectID, getUser, addUser };