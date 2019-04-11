const url = require('./../database')
var mongoClient = require('mongodb').MongoClient;
var {ObjectId} = require('mongodb');

module.exports = {
    getAll : (req, res) => {
        mongoClient.connect(url, (err, db) => {
            var users = db.collection('users')
            users.find({}).toArray((err, result) => {
                if(err) throw(err)
                console.log(result)
                res.send(result)
            })
        })
    },
    getUserById : (req, res) => {
        var id = req.params.id
        mongoClient.connect(url, (err, db) => {
            var table = db.collection('users')
            table.find({_id : ObjectId(id)}).toArray((err, result) => { // _id : dr property table users
                if(err) throw (err)
                res.send(result)
            })
        })
    },
    addData : (req,res) => {
       
        var newData = req.body
        mongoClient.connect(url, (err, db) => {
            var table = db.collection('users')
            table.insert(newData, (err, result) => {
                console.log(newData)
                if(err) throw (err)
                res.send(result)
            })
        })
    },
    updateData : (req, res) => {
        //var data = req.body
        mongoClient.connect(url, (err, db) => {
            db.collection('users')
            .update({_id : ObjectId(req.params.id)},
                    {$set : {username : req.body.user}},
                    (err, result) => {
                        if(err) throw(err)
                        res.send(result)
                    } )
        })
    },
    deleteData : (req, res) => {
        mongoClient.connect(url, (err, db) => {
            db.collection('users')
            .remove({_id : ObjectId(req.params.id)},
                    (err, result) => {
                        if(err) throw(err)
                        res.send(result)
                    })
        })
    }
    // INI BERHASIL KOK
    // deleteData : (req, res) => {
    //     mongoClient.connect(url, (err, db) => {
    //         db.collection('users')
    //         .deleteOne({_id : ObjectId(req.params.id)},
    //                    (err, result) => {
    //                        if(err) throw(err)
    //                        res.send('DELETE SUKSES')
    //                    })
    //     })
    // }
}