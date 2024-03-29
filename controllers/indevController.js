const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");

exports.homepages = catchAsyncErrors(async (req, res, next) => {
         res.json({ message: "homepage"});
     
    
});
