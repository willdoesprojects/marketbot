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

const purchaseSchema = new Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  total: {
    type: Number,
    required: true
  },
  products: [{
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }]
}, {
    versionKey: false // You should be aware of the outcome after set to false
});

const Purchase = mongoose.model('Purchase', purchaseSchema, 'Purchase');

async function getPurchaseByUserId(userId) {
  try {
    const purchase = await Purchase.findOne({ userid: userId });
    return purchase;
  } catch (error) {
    console.error(error);
  }
}

async function addPurchase(userId, total, products) {
    try {
      const purchase = new Purchase({
        userid: userId,
        total: total,
        products: products
      });
      await purchase.save();
      console.log('Purchase saved successfully!');
    } catch (error) {
      console.error(error);
    }
  }

(async function() {
    try {
        const purchase = await getPurchaseByUserId("645959b95fd7ab6af786fc4b");
        console.log(purchase);


        const userId = "645959b95fd7ab6af786fc4b";
        const total = 59.97;
        const products = [
            { name: 'apples', quantity: 2, price: 19.99 },
            { name: 'oranges', quantity: 1, price: 19.99 }
        ];
        await addPurchase(userId, total, products);
        
    } catch (error) {
        console.error(error);
    } finally {
        mongoose.connection.close();
    }
})();