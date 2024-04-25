import mongoose from "mongoose"
export const userSchema = mongoose.Schema({
    name:{
     type:String,
     required:true
    },
    email:{
    required:true,
    type:String,
    unique:true
    },
    password:{
    type: String,
    required: true,
    },
    permission:{
      type:String,
    },
    assignedReviews:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
        }
      ],
      myReviews:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
        }
      ]
},
{
      timestamps: true
}  
)
export const User = mongoose.model("User",userSchema)
