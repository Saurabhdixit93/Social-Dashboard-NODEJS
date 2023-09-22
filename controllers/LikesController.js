const Post = require("../models/PostModel");
const Comments = require("../models/CommentModel");
const Likes = require("../models/LikeModel");

const toggleLike = async (req, res) => {
  let likable;
  let deleted = false;
  let { likableId } = req.query;
  let { userId } = req.params;
  let type = req.query.type;
  try {
    if (type == "post") {
      likable = await Post.findById(likableId).populate("Like");
    } else {
      likable = await Comments.findById(likableId).populate("Like");
    }
    let existingLike = await Likes.findOne({
      User: userId,
      Likable: likableId,
      onModel: type,
    }).lean();
    if (existingLike) {
      likable.Likes.pull(existingLike._id);
      likable.save();

      await Likes.deleteOne({ _id: existingLike._id });
      deleted = true;
    } else {
      newLike = await Likes.create({
        User: userId,
        Likable: likableId,
        onModel: type,
      });
      likable.Likes.push(newLike._id);
      likable.save();
    }
    return;
  } catch (error) {
    return res.json({
      success: false,
      message: "Internal Server Errorr ..",
    });
  }
};

module.exports = {
  toggleLike,
};
