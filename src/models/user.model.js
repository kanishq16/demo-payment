const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email: {
        type: String, 
        required: [true,"Email is reqquired for creating user"], 
        trim: true, 
        lowercase: true, 
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
        unique: [true, "Email already exists"] 
    }, 
    name:{
        type: String,
        required: [true, "Name is required for creating user"]
    }, 
    password: {
        type: String,
        required: [true, "Password is required for creating user"],
        minlength:[6,"password should contain more than 6 letters"], 
        select: false
    }
}, {
    timestamps: true
})

userSchema.pre("save", async function(next){

    

})