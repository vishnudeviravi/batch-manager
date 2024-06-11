// import jwt from 'jsonwebtoken';

// export const checkToken = role => {
//   return (req, res, next) => {
//     try {
//       const bToken = req.headers.authorization;
//       console.log(req.headers.authorization);
//       if (!bToken) {
//         res
//           .status(403)
//           .json({ success: false, message: 'you are not authorized' });
//       }
//       const token = bToken.slice(7);
//       const SECRET_KEY = '@cbdce722v23eiuk231';
//       const decoded = jwt.verify(token, SECRET_KEY);
//       console.log(decoded);

//       if (role.indexOf(decoded.role) == -1) {
//         return res.status(403).json({ message: 'you are not authorized' });
//       }
//       next();
//     } catch (error) {
//       return res.status(403).json({ message: 'you are not authorized' });
//     }
//   };
// };
