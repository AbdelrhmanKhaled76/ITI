import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    console.log(req.headers) 
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "no token " });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload;
    next();
  } catch (err) {
    err.status=401
    next(err)
    // return res.status(401).json({ message: "invaild token " });
  }
};
