const mongoose = require("mongoose");
const courses = new mongoose.Schema({      
    title:{

        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    videos:{
        type:Number,
        default:0,

    },
    active:Boolean
});

module.exports = mongoose.model("Course", courses);