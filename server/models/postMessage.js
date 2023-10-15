import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String, //can change this to varchar
    message: String,
    name: String,
    creator: String,
    tags: [String], //array
    selectedFile: String,
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
