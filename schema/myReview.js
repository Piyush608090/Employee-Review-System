import mongoose from 'mongoose';

const myReviewSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required : true,
    },

  reviewed: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true,
        }
},

 {
  timestamps: true
}
)
export const Review = mongoose.model('Review', myReviewSchema);
