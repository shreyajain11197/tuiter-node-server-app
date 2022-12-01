import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    image: String,
    topic: String,
    userName: String,
    time: String,
    title: String,
    replies: String,
    retuits: String,
    handle: String,
    dislikes: Number,
    disliked: Boolean,
}, {collection: 'tuits'});

export default schema;