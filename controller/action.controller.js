import { Review } from "../schema/myReview.js";
import {User} from "../schema/user.schema.js";
export const assignWork = async (req,res) =>{
    const users = await User.find({})
    
    res.render("assignwork",{users:users,errorMessage:null})
}
export const assignReview = async (req,res) =>{
    try {
        const users = await User.find({})
        let review = await Review.findOne({ reviewer: req.body.reviewer,reviewed: req.body.reviewed});
        if (review) {
           return res.render("assignwork",{users:users,errorMessage:"Review already assigned"})
        }else{
        review=await Review.create({
            reviewer: req.body.reviewer,
            reviewed: req.body.reviewed
})
        let user = await User.findById(req.body.reviewer);
        
        user.assignedReviews.push(review);
        user.save();

        return res.render("assignwork",{users:users,errorMessage:"Review Added Succefully"})
    }
        
    } catch (error) {
        console.log('Error', error);
}
}
export const submitReview = async (req,res) =>{
  const reviewer = await User.findById(req.body.fromUser)
  const reviewed = await User.findById(req.params.id);
  const message = req.body.message
  const reviewId = req.body.reviewId
    const review = await Review.create({
    message:message,
    reviewer:reviewer,
    reviewed: reviewed,
})
    const user = await User.findById(req.params.id);
    user.myReviews.push(review)
    user.save()
    await reviewer.updateOne({
        $pull: { assignedReviews: req.body.reviewId },
      });
    await Review.findByIdAndDelete(reviewId)
    res.redirect('back')
    }
