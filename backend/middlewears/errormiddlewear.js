class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal server error";
    err.statusCode = err.statusCode || 500; // 500 - internal server error

    // Handle duplicate key error (e.g., duplicate email)
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
        err = new ErrorHandler(message, 400); // 400 - bad request
    }

    // Handle invalid JWT token
    if (err.name === "JsonWebTokenError") {
        const message = "JSON web token is invalid, try again!";
        err = new ErrorHandler(message, 400); // 400 - bad request
    }

    // Handle expired JWT token
    if (err.name === "TokenExpiredError") {
        const message = "JSON web token has expired, try again!";
        err = new ErrorHandler(message, 400); // 400 - bad request
    }

    // Handle cast errors (e.g., invalid ObjectId)
    if (err.name === "CastError") {
        const message = `Invalid ${err.path}: ${err.value}`;
        err = new ErrorHandler(message, 400); // 400 - bad request
    }

    // Aggregate mongoose validation errors
    const errorMessage = err.errors
        ? Object.values(err.errors)
            .map((error) => error.message)
            .join(", ")
        : err.message;

    return res.status(err.statusCode).json({
        success: false,
        message: errorMessage,
    });
};

export default ErrorHandler;
