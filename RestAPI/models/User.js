const {Schema, model} = require(`mongoose`)

const schema = new Schema({
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    fist_name: String,
    last_name: String,
    // {type: Types.ObjectId, ref: 'Links'}
})

module.exports = model('User', schema)