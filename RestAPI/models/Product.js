const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    title: String,
    description: String,
    type: String,
    composition: String,
    producer: String,
    sales: Number,
    rating: {
        rate: Number,
        count: Number,
    },
    colors: [
        {
            price: Number,
            oldPrice: Number,
            color_title: String,
            image: String,
            photos: {
                big: [String],
                small: [String],
            },
            sizes: [
                {
                    InternationalSize: String,
                    RussianSize: String,
                    Count: Number,
                }
            ]
        },
    ],

})

module.exports = model('Product', schema)