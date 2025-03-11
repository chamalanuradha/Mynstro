import jwt from "jsonwebtoken";

const auth = (req, res, next) => {

  try {
    const token = req.cookies.accesstoken || req.headers?.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "No token provided",
        error: true,
        success: false,
      });
    }
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    console.log(decoded)

    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
        error: true,
        success: false,
      });

    }
    req.userId = decoded.userId;

    next();

   
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Error logging in",
      error: true,
      success: false,
    });
  }
};

export default auth;
