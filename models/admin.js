const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type : String,
        required: true
    }
}
)
var adminModel = mongoose.model("admins",schema)
module.exports = adminModel