const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotEnv=require("dotenv");
dotEnv.config();

const bodyparser=require("body-parser");

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
    extended:true
}));

mongoose.connect(process.env.DATABASE_URL,{

useNewUrlParser:true,
useUnifiedTopology:true

})
.then(()=> console.log("connected to db"))
.catch((err)=>console.log(err));

app.use("/blogs",require("./routes/blogRoutes"));
app.use("/blogreviews",require("./routes/blogreviewRoutes"));


app.listen(process.env.PORT,()=> console.log("Server up and running"));
