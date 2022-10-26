const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    type: String,
    InternationalSize: String,
    RussianSize: String,
    Waist: String, // Обхват бёдр
    Girth: String // Обхват талии
})
module.exports = model('Sizes', schema)