var express = require('express');
var router = express.Router();
var Mongo = require('mongodb');
var MongoClient = Mongo.MongoClient;
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
function insertData(res, req, doc){
  MongoClient.connect('mongodb://localhost:27017', (err, client)=>{
    if(err) throw err;

    var db = client.db('paperwork');
    var data = req.body;
    db.collection(doc).insertOne(data, (err, result)=>{
      if(err) throw err;

      res.send('Sukses');
    });
  })
}

router.use('/', function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req.body);
  res.send('Sukses');
});

router.post('/dataInsert', (req,res,next)=>{
  insertData(res, req, 'StandReceiver');
})

module.exports = router;
