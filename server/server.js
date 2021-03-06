var express = require('express');
var cors = require('cors')
var request = require('request')
var bodyParser = require('body-parser')
var app = express()
var _ = require('underscore')


app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(express.static('./client/'))



//API ENDPOINT
// url = 'https://data.ct.gov/resource/y6p2-px98.json'

app.get('/api/search', function(req,res) {
	console.log('we are in searchGet')
	request.get('https://data.ct.gov/resource/y6p2-px98.json', function(error, response,body) {
		if (error) {
			console.error('error in server /api/search', error)
		}  else {
			console.log('successful get on server')
			res.status(200).send(body)
		}
	})
})



app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), function() {
	console.log('we are listening on',app.get('port'))
})