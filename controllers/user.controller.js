import User from "../models/user.model.js";

export const register = (req, res) => {
  try {
    // console.log(req.body);
    const newUser = req.body;
    User.findOne({ email: newUser.email }, (err, foundUser) => {
      if (foundUser !== null && foundUser !== undefined) {
        res.status(200).send("User already exists");
      } else {
        User.create(newUser, (err) => {
          if (!err) {
            res.status(200).send("User Registered");
          } else {
            res.status(400).json(err);
          }
        });
      }
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const getUsers = (req, res) => {
  try {
    User.find({}, (err, foundUsers) => {
      res.status(200).json(foundUsers);
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

export const login = (req, res) => {
  try {
    // console.log(req.body);
    const newUser = req.body;
    User.findOne({ email: newUser.email }, (err, foundUser) => {
      if (foundUser !== null && foundUser !== undefined) {
        if (foundUser.password === newUser.password) {
          res.status(200).json(foundUser);
        } else {
          res.status(200).send("Incorrect Credentials");
        }
      } else {
        res.status(200).send("Incorrect Credentials");
      }
    });
  } catch (e) {
    res.status(500).json(e);
  }
};

// export const editUser = (req, res) => {
//   try {
//     const { user, userId } = req.body;
//     User.findOne({ _id: userId }, (err, foundUser) => {
//       if (!err) {
//         foundUser.firstName = user.firstName;
//         foundUser.lastName = user.lastName;
//         foundUser.mobile = user.mobile;
//         foundUser.addressLine1 = user.addressLine1;
//         foundUser.addressLine2 = user.addressLine2;
//         foundUser.city = user.city;
//         foundUser.state = user.state;
//         foundUser.zipCode = user.zipCode;
//         foundUser.country = user.country;
//         foundUser.save();
//         res.status(200).json(foundUser);
//       } else {
//         res.status(400).json(err);
//       }
//     });
//   } catch (e) {
//     res.status(400).json(e);
//   }
// };
