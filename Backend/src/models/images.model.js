import { Schema, model } from 'mongoose';

const ImageSchema = Schema({
    id: String,
    name: String,
    brand: String,
    description: String,
}, {
    timestamps: true
});

export default model('Image', ImageSchema);