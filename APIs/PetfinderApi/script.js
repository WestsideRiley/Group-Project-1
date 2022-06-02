var key="QgUTHMdZwhct5j7wnu8KxKlTaEewDetmMCQhkaksGfhUoMS5aR";
var secret="1HSFJTiD4BTCHA5AdAVPhgiIq8PLOTUBL37TG2al";
var postcode= 37128;
var breed= "boxer"

fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
	body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
}).then(function (resp) {
	return resp.json();

}).then(function (data) {
	console.log('token', data);
	return fetch('https://api.petfinder.com/v2/animals?location=' + postcode + '&breed=' + breed, {
		headers: {
			'Authorization': data.token_type + ' ' + data.access_token,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});

}).then(function (resp) {

	
	return resp.json();

}).then(function (data) {

	
	console.log('pets', data);

}).catch(function (err) {

	
	console.log('something went wrong', err);

});