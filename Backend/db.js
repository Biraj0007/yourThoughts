const mongoose = require('mongoose');
const mongoUri = 'mongodb://127.0.0.1:27017/createnote'
// mongodb+srv://Birajananda:Patra%40321@cluster0.mzc5slg.mongodb.net/createnote
// mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
const connectToDb= async()=>{
 try{
    await mongoose.connect(
        mongoUri,
        { useNewUrlParser: true, useUnifiedTopology: true},
        () => {
          console.log('Connected to MongoDB');
        }
      )
    }
    catch (error) {
        console.log(error);
        process.exit(1);
      }
}

// const connectToDb = async () => {
//     try {
//       mongoose.set("useNewUrlParser", true);
      
//       await mongoose.connect(process.env.DB_CONNECT);
  
//       console.log("connected to database");
//     } catch (error) {
//       console.log(error);
//       process.exit(1);
//     }
//   };

module.exports= connectToDb
// "dev": "nodemon index.js"