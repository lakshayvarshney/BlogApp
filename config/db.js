const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connect to mongo database`)
        
    } catch (error) {
        console.log(`Mongo connect error ${error}`)
        
    }
}

module.exports = connectDB