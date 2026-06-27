const mongoose = require("mongoose");

mongoose.connect(
"mongodb+srv://admin:12345678@cluster0.xxxxx.mongodb.net/todoDB?retryWrites=true&w=majority"
)

.then(() => {
    console.log("MongoDB Atlas Connected");
})

.catch(err => {
    console.log(err);
});

module.exports = mongoose;