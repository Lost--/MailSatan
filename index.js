var secrets = require("./secrets.js")
var request = require("request");
var sendgrid  = require('sendgrid')(secrets.USERNAME, secrets.PASSWORD);

function callBack (error, request, body){
	var data = JSON.parse(body);
	do{
	var index = Math.floor(Math.random()*data.length);
	var band = data[index];
	}while(!band.url || band.status === "Split-up" || band.country != "United States");
	
	var bandInfo = "The band known as " + band.name + " demands immediate attention... They are blasphemous Satan worshippers" +
	" whose lyrical themes include: " + band.lyrical_themes + " and the like." +
	" You can find their information here: " + band.url + 
	" Go forth and picket their concerts, as He would have wanted.";
	console.log(bandInfo);

	sendgrid.send({
  		to:       'cabaretewilliam@hotmail.com',
		bcc:	  'cjohnwilkinson@hotmail.com',
  		from:     'SuperLongDong@dingus.gov',
  		subject:  'Heathens in need of picketing',
  		text:     bandInfo
	}, function(err, json) {
  		if (err) { return console.error(err); }
 	 console.log(json);
	});

};


request("http://perelste.in:8001/api/bands/lyrical_themes/satan/", callBack);
