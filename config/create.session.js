import {User} from "../schema/user.schema.js"
export const createSession = async (req,res) => {
const {email,password} = req.body
req.session.email = email
req.session.password = password
const user = await User.findOne({email:email})
    if(!user){
        return res.render("signin",{errorMessage:"User not found"})
     }else{
        if(user.password!=password){
            return res.render("signin",{errorMessage:"Password is incorrect"})
         }else{
         if(user.permission=="Admin"){
             return res.redirect("/adminview")
         }else{
             return res.redirect("/emplyeeview")
         }}}}
 
    
