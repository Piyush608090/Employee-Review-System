import express from "express";
import path from "path";
import connectToMongoose from "./config/mongoose.js";
import {router as userRouter} from "./router/user.routes.js"
import {router as actionRouter} from "./router/action.router.js"
import {router as employeeRouter} from "./router/employeelist.router.js"
import session from "express-session";
import MemoryStore from "memorystore";
const server = express();
server.use(express.urlencoded({extended:true}))
server.set('view engine', 'ejs');
server.use(session({
    secret:"key",
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    resave:false,
    saveUninitialized:true,
}))
server.set('views', path.join(path.resolve(), 'views'));
server.use('/', userRouter)
server.use("/review",actionRouter)
server.use("/employeesection",employeeRouter)

server.listen(3000,()=>{
     console.log("Server is Running on Port:3000")
    connectToMongoose();
})
