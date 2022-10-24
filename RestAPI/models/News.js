const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    title: {type: String, require: true},
    content: String,
    date: {type: Date, default: Date.now},
    image: String,
})

module.exports = model('News', schema)