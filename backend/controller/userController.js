import { catchasyncErrors} from "../middlewears/catchAsyncErrors.js"
import ErrorHandler from "../middlewears/errormiddlewear.js"
import {User} from "../models/userSchema.js"

export const patientRegister = catchasyncErrors(async(req,res,next)=>{
    const{firstName,lastName,email,phone,password,gender,dob,nic,role}= req.body
    if(!firstName||!lastName||!email||!phone||!password||!gender||!dob||!nic||!role)
        {
            return next(new ErrorHandler("Please fill full form!",400));
        } 
        const user = await User.findOne({email});
        if(user)
            {
                return next(new ErrorHandler("user already Registered!",400));
            }
            user = await user.create({firstName,lastName,email,phone,password,gender,dob,nic,role});
            res.status(200).json({
                 success:true,
                message:"user Registerd",
            });
            

})
