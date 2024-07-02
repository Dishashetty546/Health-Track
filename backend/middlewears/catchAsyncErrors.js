//catchasyncErrors are used in asynchronous route handlers(HTTP req errors, databse)
export const catchasyncErrors = (theFunction)=>{
    return (req,res,next) =>{
        //it will promise to resolve theFunction(req,res,next), if not catch(next)
        Promise.resolve(theFunction(req,res,next)).catch(next);
    };
}