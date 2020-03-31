const mongoose=require('mongoose')
require('dotenv').config()
const validator=require('validator');
const Schema = mongoose.Schema;

const recordSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    dateofbirth:{
        type:String,
        required:true,
    },
    workplace:{
          type:String,
          required:true        
    },
    currentdegree:{
        type:String,
        required:true,
        trim:true
    },
    additional:{
     type:String
    },
    email:{
        type:String,
        required:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                console.log('Invalid Email')
            }
          }

    },
    academicrecords:{
        type:Array,
        default:[]
    },
    address:{
         type:String,
         required:true,
         trim:true
    },
    phone:{
         type:Number,
    },
    images:{
     type:Array,
     default:[]
    },
    awards:{
        type:Array,
        default:[]
    },
    skills:{
        type:Array,
        default:[]
    },
    

})


const Record=mongoose.model('Record',recordSchema)


module.exports={Record}