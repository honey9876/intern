exports.catchAsyncErrors = (func) => (req, res, nest) => {
  Promise.resolve(func(req, res, next)).catch(next);

};

