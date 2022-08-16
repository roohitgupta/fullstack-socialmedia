import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    title: { type: String }, 
    message: { type: String },
    creator: { type: String },
    tags: [ String ], 
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Number,
        default: new Date()
    },
});

const postMessage = mongoose.model('PostMessage', postSchema);

export default postMessage;