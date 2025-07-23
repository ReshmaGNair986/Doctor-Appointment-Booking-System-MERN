var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://neha22:neha123@cluster0.oullw3x.mongodb.net/db?retryWrites=true&w=majority').then(()=>{
console.log("Database connected");
}).catch((err)=>{
    console.log(err);
    
})
