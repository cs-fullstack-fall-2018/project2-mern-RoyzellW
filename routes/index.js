var express = require('express');
var router = express.Router();

//Include body parser
const bodyParser = require('body-parser');

//blog Model
const blog = require('../models/template');


    router.get('/', function (req, res) {
        blog.find({}, function (err, test) {
            if (err) {
                throw err;
            }
            res.send(test);
        })
    });

// router.get('/getAll', function (req, res) {
//     blog.find({}, function (err, test) {
//         if (err) {
//             throw err;
//         }
//         res.send(test);
//     })
// });

    // router.get('/:username', function (req, res) {
    //     blog.find({username: req.params.username}, function (err, blog) {
    //         if (err) {
    //             throw err;
    //         }
    //         res.send(blog);
    //     })
    // });

    router.get('/getAll', function (req, res) {
        blog.find({}, function (err, test) {
            if (err) {
                throw err;
            }
            res.send(test);
        })
    });

    router.post('/', function (req, res) {
        const newBlog = new blog({
            username: req.body.username,
            title: req.body.title,
            content: req.body.content
        });

        newBlog.save().then(blog => res.json(blog));
    });

    router.put('/:username', function (req, res) {

        blog.findOneAndUpdate(req.body.id, {
            title: req.body.title,
            content: req.body.content,

        }, function (err, todo) {
            if (err) {
                throw err;
            }

            res.json({success: true});
        });
    });

    router.delete('/:id', function (req, res) {
        blog.findByIdAndRemove(req.params.id, function (err) {
            if (err) {
                throw err;
            }
            res.json({success: true})
        })
    });

module.exports = router;