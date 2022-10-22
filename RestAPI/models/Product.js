const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    title: String,
    description: String,
    sales: Number,
    price: Number,
    type: String,
    oldPrice: Number,
    producer: String,
    rating: {
        rate: Number,
        count: Number,
    },
    photos: {
        big: [String],
        small: [String],
    },
})

module.exports = model('Product', schema)