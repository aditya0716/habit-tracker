const mongoose=require('mongoose');

const habitSchema=new mongoose.Schema({
    habit:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    routine:{
        type:Number,
        require:true,
    },
    starttime:{
        type:String,
    },
    startdate:{
        type:String,
    },
});
const Habit=mongoose.model('Habit',habitSchema);
module.exports=Habit; 