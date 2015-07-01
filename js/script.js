navigator.geolocation.getCurrentPosition(success, fail);
var lat, lon, date;
function success(pos){
	lat = pos.coords.latitude;
	lon = pos.coords.longitude;

	window.localStorage.setItem('lat', lat);
	window.localStorage.setItem('lon', lon);

	getWeather(lat,lon);
	console.log(lat+" "+lon);

}
function fail(error){
	lat = window.localStorage.getItem('lat');
	lon = window.localStorage.getItem('lon');
	if(lat && lon){
		getWeather(lat, lon);
	}else{
		console.log(error.message);
	}
}

function getWeather(lat, lon){
	$.get('http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&lang=pt',
	function(data){
		console.log(data);
		//$("#content").text(data.weather[0].main);
		date = new Date(data.dt);
		var $weather = '<p>'+ data.weather[0].main +'</p>',
			$temp = '<p>'+ data.main.temp + 'º</p>',
			$city = '<p>' + data.name + '</p>',
			$date = '<p>' + date + '</p>';
		$('#content').html($weather + $temp + $city + $date);
	});
}
/*$.get("http://api.openweathermap.org/data/2.5/weather?q=Niter%C3%B3i&units=metric&lang=pt",
	function(data){
	console.log(data.weather[0].main);
});*/