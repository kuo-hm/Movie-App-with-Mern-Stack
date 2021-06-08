const Info = require("../models/info");

exports.save = async (req, res, next) => {
  const { username, bio, birthday, avatar } = req.body;

  try {
    const info = await Info.create({
      username,
      bio,
      birthday,
      avatar,
    });
    res.status(200).json({ sucess: true, saved: info });
  } catch (err) {
    next(err);
  }
};
exports.info = async (req, res, next) => {
  const { username } = req.body;

  try {
    const info = await Info.findOne({ username });
    res.status(200).json({ sucess: true, data: info });
    return info;
  } catch (err) {
    next(err);
  }
};
