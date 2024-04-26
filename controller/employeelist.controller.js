import {User} from "../schema/user.schema.js";

// Rendering Employee Section and Sending data to employee Section
export const employeeSection = async (req,res) =>{
try{ 
const users = await User.find({})
res.render("employeesection",{users:users,errorMessage:null})
}catch(err){
console.log(err)
}
}  
export const deleteEmployee = async (req,res) =>{
    const user = await User.findById(req.params.id)
    const users = await User.find({})
    if(user.permission == "Admin"){
    res.render("employeesection",{users:users,errorMessage:"First Remove From Admin than you can delete it"})
    }else{
    await user.deleteOne();    
    res.redirect("/employeesection/employeelist")
}
}
export const updateEmployee = async (req,res)=>{
    const {name,email,password} = req.body;
    const user = await User.findById(req.params.id)
    user.name = name
    user.email = email
    user.password = password
    user.save()
    res.redirect("/employeesection/employeelist")
}
export const makeAdmin = async (req,res) => {
    const user = await User.findById(req.params.id)
    if(user.permission != "Admin"){
       user.permission = "Admin" 
    }else{
       user.permission = "" 
    }
    user.save();
    res.redirect("/employeesection/employeelist")
}
