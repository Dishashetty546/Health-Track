//controlling the message model request, response and next 
//importing message from messsageSchema
import { Message } from "../models/messageschema.js";
//always error middlewears are imported to controller.js
import { catchasyncErrors} from "../middlewears/catchAsyncErrors.js"
import  errorHandler  from "../middlewears/errormiddlewear.js"

export const sendMessage = catchasyncErrors(async(req,res,next) => {
    //from body of messgeSchema request 
    //initialize 
    const { firstname, lastname, email , phone, message } = req.body;

    //for not success case
    if(!firstname || !lastname || !email || !phone || !message){
        return next(new errorHandler("please fill the full form!"));
    }
                await Message.create({firstname,lastname,email,phone,message});
                res.status(200).json({
                    success:true,
                    message:"Message send successfully",

                });

        });
    

    