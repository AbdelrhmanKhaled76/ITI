import userModel from "../models/userModel.js";
import ErrorHandler from "../util/errorHandler.js";
import genToken from "../util/genToken.js";

const registerUser = async (req, res, next) => {
  const { username, email, password, role } = req.body;
  if (!username || !email || !password) {
    return next(new ErrorHandler("username, password, and email are required fields", 400));
  }

  const userRole = role ?? "user";
  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return next(new ErrorHandler("email already exists", 400));
    }

    const newUser = await userModel.create({
      email,
      password,
      role: userRole,
      username,
    });
    const token = genToken(newUser);

    return res.status(201).json({
      success: true,
      message: "user created successfully",
      token,
      data: {
        email: newUser.email,
        username: newUser.username,
        role: newUser.role,
      },
    });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("email and password are required fields", 400));
  }

  try {
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorHandler("email or password are wrong", 401));
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return next(new ErrorHandler("email or password are wrong", 401));
    }

    const token = genToken(user);
    return res.status(200).json({
      success: true,
      message: "login successful",
      token,
      data: {
        email: user.email,
        username: user.username,
        role: user.role,
      },
    });
  } catch (err) {
    next(err);
  }
};

export { registerUser, loginUser };