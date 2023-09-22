// Post schema collection

const { Schema, model } = require("mongoose");
const postSchema = new Schema(
  {
    text: { type: String, require: true },
    postImage: { type: String },
    User: { type: Schema.Types.ObjectId, ref: "User" },
    Comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    Likes: [{ type: Schema.Types.ObjectId, ref: "Like" }],
  },
  { timestamps: true }
);

module.exports = model("Post", postSchema);
