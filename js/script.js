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
	$.get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric',
	function(response){
		console.log(response);
		//$("#content").text(response.weather[0].main);
		date = new Date();
		var $icon = '<p><img class="icon" src="http://openweathermap.org/img/w/'+response.weather[0].icon+'.png" /></p>',
			//$icon = '<p><i class = "wi '+getIcon(response.weather[0].main)+'"></i></p>',
			$weather = '<p>'+ response.weather[0].main +'</p>',
			$temp = '<p>'+ response.main.temp + 'º</p>',
			$city = '<p>' + response.name + '</p>',
			$date = '<p>' + date.getDate()+'/'+ (date.getMonth()+1) + '</p>';
		$('#content').html($icon + $weather + $temp + $city + $date);
	});
}
/*function getIcon(w){
	switch(w.toLowerCase()){
		case 'clear':
			return 'wi-day-sunny';
	}
}*/