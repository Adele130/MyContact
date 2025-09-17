const mongoose = require('mongoose')

//On créé le schéma des obets de la dbb
const userSchema = mongoose.Schema(
    {
        //objets
        firstname: {//nom du champ + type + obligation
            type:String,
            required:true,
        },

        lastname: {
            type:String,
            required:true,
        },

        email : {
            type:String,
            required:true,
        },

        phone: {
            type:String,
            required:true,
        }
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User;