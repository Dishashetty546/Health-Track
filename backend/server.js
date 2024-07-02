//always import by its file name like app.js not just app
import app from "./app.js";

//import cloudinary
import cloudinary from 'cloudinary';

//setting cloudinary
cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY, 
    api_secret:process.env.CLOUDINARY_API_SECRET

});

//listning to port number
//using config folder for PORT 
app.listen(process.env.PORT, () =>{
    console.log(`server listning on port ${4000}`);
});