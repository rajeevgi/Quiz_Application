const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB Connected Successfully...'))
.catch(() => console.log("Something went wrong!"))

module.exports = mongoose;