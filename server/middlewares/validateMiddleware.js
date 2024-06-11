const { body, validationResult } = require('express-validator');

exports.validateLogin = [
  body('Mobile_no').isString().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
