var express = require('express');
var router = express.Router();
let cors = require('cors');
var jwt = require('jsonwebtoken');

// let corsOption = {
//   "origin": "*",
//   "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
//   "preflightContinue": false,
//   "optionsSuccessStatus": 200
// }

// for validation
const {
  check,
  validationResult
} = require('express-validator/check');

// default get for api/users
router.get('/', (req, res, next) => {
  console.log("get request from api/users")
  req.app.locals.db.collection('users').find().toArray((err, data) => {
    if (err) return res.status(500).json({
      error: err
    });
    else
      res.status(200).json(data);
  });
});

// to find details of a user
router.get("/:username", (req, res) => {

  console.log('find details of a particular user!!');
  let username = req.params.username;

  req.app.locals.db.collection('users')
    .find({
      "username": username
    }).toArray((err, results) => {
      if (err) return res.status(404).json({
        error: err
      });
      res.status(200).json(results);
      console.log(username);
    });
});

// to add a user to our users collection
router.post("/add", [
  check("username", "username field cannot be empty").exists(),
  check("email", "email cannot be empty").exists(),
  check("password", "password cannot be empty").exists()
], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array()
    });
  }

  let newDoc = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    type: "Registered"
  };
console.log(newDoc);
  req.app.locals.db.collection('users').insertOne(newDoc, (err, data) => {
    if (err) return res.status(500).json({
      error: err
    });
    return res.status(201).json({
      status: "user successfully added to collection"
    });
  });

});

// to update the user type using their username
router.patch("/update/:username", (req, res) => {
  let username = req.params.username;
  let newtype = req.body.type;

  console.log(`updating the user with email of ${email}`);
  let myquery = {
    "username": username
  };

  let newValues = {$set: {type: newtype}};

  req.app.locals.db.collection('users')
    .updateOne(myquery, newValues, (err, success) => {
      if (err) return res.status(404).json({
        error: err
      });

      return res.status(200).json({
        status: `user type successfully updated to ${newtype}`
      })
    });

});


// to delete a user using their username
router.delete("/delete/:username", (req, res) => {
  let username = req.params.username;

  console.log(`deleting the user with username ${username}`);
  let myquery = {
    "username": username
  };

  req.app.locals.db.collection('users')
    .deleteOne(myquery, (err, success) => {
      if (err) return res.status(404).json({
        error: err
      });

      return res.status(200).json({
        status: "user successfully deleted from collection"
      })
    });

});


//for login
router.post('/login', (req, res, next) => {

  let username = req.body.username;
  let password = req.body.password;

  req.app.locals.db.collection('users').find({"username": username, "password": password}).toArray((err, data) => {
    if (err) return res.status(500).json({
      token:""
    });
    else {
      console.log(data);
      const user = data[0];

      var token = jwt.sign({ userId: user._id , email: user.email}, 'fksjflsjfklsjflkajfklsjfklsjflkajfklsjf8759358395738957839');


      if(data.length === 0) {
        res.status(422).json({token:""});
      }else {
        res.status(200).json({
          token: token,
          username: user.username
        });
      }
      
    }
  });
});


module.exports = router;