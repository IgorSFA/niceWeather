navigator.geolocation.getCurrentPosition(success, fail);

function success(pos){
	var lat = pos.coords.latitude;
	var lon = pos.coords.longitude;

	window.localStorage.setItem('lat', lat);
	window.localStorage.setItem('lon', lon);

	getWeather(lat,lon);
	console.log(lat+" "+lon);

}
function fail(error){
	var lat = window.localStorage.getItem('lat');
	var lon = window.localStorage.getItem('lon');
	if(lat && lon){
		getWeather(lat, lon);
	}else{
		console.log(error.message);
	}
}

function getWeather(lat, lon){
	$.get("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&lang=pt",
	function(data){
		console.log(data);
		$("#clima").text(data.weather[0].main);
	});
}
/*$.get("http://api.openweathermap.org/data/2.5/weather?q=Niter%C3%B3i&units=metric&lang=pt",
	function(data){
	console.log(data.weather[0].main);
});*/