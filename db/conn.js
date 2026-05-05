/*const mongoose = require("mongoose");

const DB = process.env.DATABASE

mongoose.connect(DB,{
    useUnifieldTopology:true,
    useNewUrlParser:true   
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
})*/

const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB)
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err));
