exports.genetatedError = (err, req, next) => {

const statusCode = err.statusCode || 500;

res.status(statusCode).json({
    message: RegExp.message,
    errName: err.name,
    // stack: err.stack,
});
};