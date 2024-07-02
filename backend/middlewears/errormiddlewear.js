class ErrorHandler extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}export const errormiddlewears =(err,req,res,next)=>{
    err.message = err.message || "Internal server Error";
    err.statusCode = err.statusCode || 500; //500-internal server error

//this error is for duplicates like if we enter mail id, already existing ones, this can show duplicate errors
    if(err.code ===11000){
        const message = `duplicate ${Object.keys(err.keyvalue)} entered`;
        err= new ErrorHandler(message,400); //400 is for status code
    }

// invalid token format or signature mismatch, typically arising from authentication failures.
    if(err.code === "jsonWebTokenError"){
        const message = "json web token is invalid, try again!";
        err= new ErrorHandler(message,400); //400 is for status code
    }
 
//JWT's expiration time (expiry) has passed, indicating that the token is no longer valid for authentication 
    if(err.code === "tokenexpirederror"){
        const message = "json web token is invalid, try again!" ;
        err= new ErrorHandler(message,400); //400 is for status code
    }

//MongoDB and Mongoose, CastError occurs when data is incorrectly formatted or fails type validation, often due to mismatched data types between the schema
    if(err.code === "CastError"){
        const message = `Ivalid ${err.path}`;
        err= new ErrorHandler(message,400); //400 is for status code
    }

    const errorMessage = err.errors?
    Object.values(err.errors)
    .map((error)=>error.message)
    .join("")
    :err.message;
    
    return res.status(err.statusCode).json({
        success: false,
        message:err.message,
    });
};
export default ErrorHandler;
