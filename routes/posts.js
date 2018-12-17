var express = require('express');
var router = express.Router();

// for validation
const {
    check,
    validationResult
} = require('express-validator/check');

// default get for api/posts
router.get('/', (req, res, next) => {
    console.log("get request from api/posts")
    req.app.locals.db.collection('posts').find().toArray((err, data) => {
        if (err) return res.status(500).json({
            error: err
        });
        res.status(200).json(data);
    });
});

// to find posts using username
router.get("/:username", (req, res) => {

    console.log('find post for a user route entered!!');
    let username = req.params.username;

    req.app.locals.db.collection('posts')
        .find({
            "username": username
        }).toArray((err, results) => {
            if (err) return res.status(404).json({
                error: err
            });
            res.status(200).json(results);
            console.log(id);
        });

});

// to add a post to our collection
router.post("/add", [
    check("username", "username field cannot be empty").exists(),
    check("title", "title cannot be empty").exists(),
    check("body", "body cannot be empty").exists()
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
        title: req.body.title,
        body: req.body.body,
        created_date: "",
        updated_date: "",
        status: "Inactive",
        comments: []
    };

    req.app.locals.db.collection('posts').insertOne(newDoc, (err, data) => {
        if (err) return res.status(500).json({
            error: err
        });
        return res.status(201).json({
            status: "successfully posted"
        });
    });

});

// to update a post body using their post id
router.patch("/update/:id", [
    check("body", "body field cannot be empty").exists()
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    let id = req.params.id;
    let newbody = req.body.body;

    console.log(`updating the post with id of ${id}`);
    let myquery = {
        "_id": id
    };

    let newValues = {
        $set: {
            body: newbody
        }
    };

    req.app.locals.db.collection('posts')
        .updateOne(myquery, newValues, (err, success) => {
            if (err) return res.status(404).json({
                error: err
            });

            return res.status(200).json({
                status: `post body successfully updated to ${newbody}`
            })
        });

});

// to add comment to a post using id
router.patch('/:postid/addcomment', (req, res) => {
    let id = req.params.postid;

    let myquery = {
        "_id": id
    };

    let newComment = {
        email: req.body.email,
        text: req.body.text
    }

    req.app.locals.db.collection('posts')
        .updateOne(myquery, {$push: {comments: newComment}}, (err, success) => {
            if (err) return res.status(404).json({
                error: err
            });

            return res.status(200).json({
                status: `successfully added new comment to the post with id ${id}: ${JSON.stringify(newComment)}`
            })
        })

})


// to delete a post using their id
router.delete("/delete/:id", (req, res) => {
    let id = req.params.id;

    console.log(`deleting the post with id of ${id}`);
    let myquery = {
        "_id": id
    };

    req.app.locals.db.collection('posts')
        .deleteOne(myquery, (err, success) => {
            if (err) return res.status(404).json({
                error: err
            });
            return res.status(200).json({
                status: "post successfully deleted from the collection"
            })
        });

});

module.exports = router;