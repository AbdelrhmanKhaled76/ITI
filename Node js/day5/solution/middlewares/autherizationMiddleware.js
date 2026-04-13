export const authorization = (role) => {
  return (req, res, next) => {
    if (!req.user || role !== req.user.role) {
      return res.status(403).json({ message: "forbidden" });
    }
    next();
  };
};

export default authorization;