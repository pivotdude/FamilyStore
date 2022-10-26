const {Schema, model} = require(`mongoose`)


const schema = new Schema({
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    login: {type: String, require: true},
    cart : [{id:{type: Schema.Types.ObjectId, ref: 'Products'}, }]
})
module.exports = model('User', schema)