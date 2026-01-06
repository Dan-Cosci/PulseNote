
//  removes all try-catch block from the app
const asyncHandler = fn => (req,res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;