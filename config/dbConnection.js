const mongoose = require('mongoose')

exports.connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log('db connected:', connect.connection.name);
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}