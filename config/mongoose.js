const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/habitdb',{useNewUrlParser:true});
const db=mongoose.connection;
db.on('error',console.error.bind(console,'Error connecting to Database'));
db.once('open',()=>{
    console.log('Successfully Connected to Database');
})