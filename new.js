const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/task5")
.then(()=>console.log('connected'))
.catch(()=>console.log("not connected"))
//define schema for academic 
const academic= new mongoose.Schema({
    studentId: Number,
    name: String,
    grades:Object,
    subjects:Array
    
   });
   // define schema  for cocurricular
   const cocurricular=new mongoose.Schema({
    studentId: Number,
    name: String,
    activityType:String,
    duration:String
   });
// define collections for academic
   const academic_records =  new mongoose.model("academic_records", academic);
   // define collection for cocurricular
   const cocurricular_records =  new mongoose.model("cocurricular_records", cocurricular);
//inserting data for academic
const academicdata=new academic_records({
    studentId:21,
    name:"Ashish Rautela",
    grades:{ math: 85, science: 90, history: 80 },
    subjects:["math", "science", "history"]
    
   });
academicdata.save();
//inserting data for cocurricular
const cocurriculardata=new cocurricular_records({
    studentId:21,
   name: "Ashish Rautela",
   activity_type: "Eco Club",
   duration: "2 years"
    
   });
   cocurriculardata.save();
   // find command for academic
   const getDocument=async()=>{
    const result=await academic_records.find();
    console.log(result);
    
   }
   getDocument();
//find command for cocurricular
   const postDocument=async()=>{
    const result=await cocurricular_records.find();
    console.log(result);
    
   }
   postDocument();
   //delete command for cocurricular
   const delDocument=async()=>{
    const result=await cocurricular_records.deleteOne({name:"Ashish Rautela"});
    console.log(result);
    
   }
   delDocument();
   //update command for cocurricular
   
   const updateDocument=async()=>{
    const result=await cocurricular_records.updateOne({name:"Ashish Rautela"},{$set:{studentId:22}});
    console.log(result);
    
   }
   updateDocument();
   