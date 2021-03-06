const mongoose=require('mongoose');
const weekSchema=new mongoose.Schema({
    id:{
        type:String
    },
    name:{
        type:String
    },
    sun:{
        type:Boolean,
        default:false
    },
    mon:{
        type:Boolean,
        default:false
    },
    tue:{
        type:Boolean,
        default:false
    },
    wed:{
        type:Boolean,
        default:false
    },
    thu:{
        type:Boolean,
        default:false
    },
    fri:{
        type:Boolean,
        default:false
    },
    sat:{
        type:Boolean,
        default:false
    } 
});
const week=mongoose.model('week',weekSchema);
module.exports=week;