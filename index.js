var request = require("request");
function callBack (error, request, body){
	var data = JSON.parse(body);
	do{
	var index = Math.floor(Math.random()*data.length);
	var band = data[index];
	}while(!band.url || band.status === "Split-up");
	console.log(band);
	var bandInfo = "0 " + band.name + " IS CrAY... They are blasphemous \nSatan worshippers" +
	" who's lyrical themes include: \n" + band.lyrical_themes + " and the like." +
	" You can find their\n information here: " + band.url;
	console.log(bandInfo);
};
request("http://perelste.in:8001/api/bands/lyrical_themes/satan/", callBack);
