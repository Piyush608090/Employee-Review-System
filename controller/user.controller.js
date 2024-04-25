import { Review } from "../schema/myReview.js"
import {User} from "../schema/user.schema.js"
import {ObjectId} from "mongoose"
// Render Login Page
export const signIn = (req,res) =>{
    res.render("signin",{errorMessage:null})
}
// Render Registration Page
export const signUp = (req,res) =>{
    res.render("signup",{errorMessage:null})
}
// Register Method For User
export const registerUser = async (req,res,next)=>{
    try{        
    const {name,email,password} = req.body
    if(name.trim() == "" && email.trim() == "" && password.trim() == ""){
      return res.render("signup",{errorMessage:"Field Must Be Required To Signup"})
    }else{
    const user = await User({name,email,password})
    user.save(); 
    return res.render("signup",{errorMessage:"Register Succesfully"})
  }
 }catch(err){
    console.log(err)
    }
    }
// Render Home For Admin And Employee User
export const adminView = async (req,res) => {
        try{
            const user = await User.findOne({email:req.session.email})
              .populate({
                path:"assignedReviews",
                populate:{
                    path:"reviewed",
                    model: 'User',
                }
              }) .populate({
                    path: 'myReviews',
                    populate: {
                      path: 'reviewer',
                      model: 'User',
                    },
            })
            const assignedReviews = user.assignedReviews;
            const myReviews = user.myReviews
            return res.render("adminview",{assignedReviews,myReviews,})
}catch(err){
console.log(err)
}
}
export const employeeView = async (req,res) =>{
  try{
  const user = await User.findOne({email:req.session.email})
  .populate({
    path:"assignedReviews",
    populate:{
        path:"reviewed",
        model: 'User',
    }
  }) .populate({
        path: 'myReviews',
        populate: {
          path: 'reviewer',
          model: 'User',
        },
})
const assignedReviews = user.assignedReviews;
const myReviews = user.myReviews;
const username = user.name
return res.render("home",{
    assignedReviews,
    myReviews,
    username,
})
}catch(err){
console.log(err)
}
} 

export const logoutUser = (req,res) =>{
  req.session.destroy();
  res.clearCookie('connect.sid');
  res.redirect('/'); 
}