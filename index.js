var request = require("request");
var sendgrid  = require('sendgrid')("kaushalp88", "Kaushal88");

function callBack (error, request, body){
	var data = JSON.parse(body);
	do{
	var index = Math.floor(Math.random()*data.length);
	var band = data[index];
	}while(!band.url || band.status === "Split-up");
	console.log(band);
	var bandInfo = band.name + " IS CrAY... They are blasphemous \nSatan worshippers" +
	" who's lyrical themes include: \n" + band.lyrical_themes + " and the like." +
	" You can find their\n information here: " + band.url;
	console.log(bandInfo);
//'cabaretewilliam@hotmail.com'
	sendgrid.send({
  		to:       'cjohnwilkinson@hotmail.com',
  		from:     'SuperLongDong@dingus.gov',
  		subject:  'Heathens in need of picketing',
  		text:     bandInfo
	}, function(err, json) {
  		if (err) { return console.error(err); }
 	 console.log(json);
	});

};


request("http://perelste.in:8001/api/bands/lyrical_themes/satan/", callBack);
