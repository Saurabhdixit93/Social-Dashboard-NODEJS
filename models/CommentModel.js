// comment schema collection

const { Schema, model } = require("mongoose");
const commentSchema = new Schema(
  {
    text: { type: String, require: true },
    User: { type: Schema.Types.ObjectId, ref: "User" },
    Post: { type: Schema.Types.ObjectId, ref: "Post" },
    Likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
  },
  { timestamps: true }
);

module.exports = model("Comment", commentSchema);
