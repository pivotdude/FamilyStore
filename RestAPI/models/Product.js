const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    title: String,
    description: String,
    sales: Number,
    type: String,
    composition: String,
    producer: String,
    rating: {
        rate: Number,
        count: Number,
    },
    colors: [
        {
            price: Number,
            oldPrice: Number,
            color_title: String,
            album: String,
            photos: {
                big: [String],
                small: [String],
            },
        },
    ],
    sizes: [
        {
            InternationalSize: String,
            RussianSize: String,
            Waist: String, // Обхват бёдр
            Girth: String // Обхват талии
        }
    ]
})

module.exports = model('Product', schema)