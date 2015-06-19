$ ( function () {

	var availableTags = [ 'abuja hostel',
		'agric',
		'amphi theatre',
		'art classes',
		'asuu building',
		'biosystems engr',
		'block 1',
		'block 1 car park',
		'block 2',
		'block 3',
		'block 4',
		'block 5',
		'block 6',
		'block 7',
		'block 8',
		'block 9',
		'block 10',
		'blt t',
		'boys hostel',
		'boys hostel mosque',
		'bss leture rooms',
		'buka 1',
		'buka 10',
		'buka 2',
		'buka 7',
		'bus admin',
		'central mosque',
		'chapel of the light',
		'cis',
		'cis mosque',
		'compound a',
		'compound b',
		'compound c',
		'compound d',
		'compound e',
		'comsit',
		'cu building',
		'dept of geology',
		'education (new)',
		'education (old)',
		'elearning centre',
		'elibrary',
		'faculty of law',
		'first bank',
		'fountain',
		'geology',
		'geology auditorium',
		'gtbank',
		'indoor games bldg',
		'kam abioye',
		'kwara hostel',
		'lagos hostel',
		'law restaurant',
		'lt1',
		'lt2',
		'lt3',
		'lt4',
		'michael hostel',
		'microfinance bank',
		'moringa plantation',
		'motion ground',
		'muslim brothers lodge',
		'pace setters',
		'pfa lt',
		'pg',
		'post office',
		'probitas hostel',
		'professorial suites',
		'sch car park',
		'school auditorium',
		'school bookshop',
		'school car park',
		'school clinic',
		'school library',
		'scientific htl',
		'senate building',
		'sis biggs',
		'sky chicken',
		'slt',
		'st thomas aquinas catholic church',
		'stac',
		'staff club',
		'student affairs',
		'student affairs atm',
		'student union mart',
		'sub',
		'sugar research',
		'uba',
		'uba atm',
		'ucu',
		'ucu hostel',
		'unilorin dam',
		'unilorin fm',
		'works',
		'zamfara',
		'zamfara hostel' ];

	$ ( "#start" ).autocomplete ( {

		source: availableTags

	} );

	$ ( "#end" ).autocomplete ( {

		source: availableTags

	} );

	window.locations = {
		"abuja hostel": [
			8.484332,
			4.667643
		],
		"agric": [
			8.486251,
			4.676108
		],
		"amphi theatre": [
			8.484707,
			4.67416
		],
		"art classes": [
			8.485003,
			4.671736
		],
		"asuu building": [
			8.479104,
			4.676923
		],
		"biosystems engr": [
			8.485959,
			4.676692
		],
		"block 1": [
			8.480672,
			4.673777
		],
		"block 1 car park": [
			8.480884,
			4.674329
		],
		"block 2": [
			8.481134,
			4.673889
		],
		"block 3": [
			8.481558,
			4.674024
		],
		"block 4": [
			8.481977,
			4.674136
		],
		"block 5": [
			8.48237,
			4.674131
		],
		"block 6": [
			8.482821,
			4.674217
		],
		"block 7": [
			8.483261,
			4.674453
		],
		"block 8": [
			8.483712,
			4.67449
		],
		"block 9": [
			8.484227,
			4.674351
		],
		"block 10": [
			8.48463,
			4.6747
		],
		"blt t": [
			8.486298,
			4.67404
		],
		"boys hostel": [
			8.480799,
			4.670837
		],
		"boys hostel mosque": [
			8.481041,
			4.672288
		],
		"bss leture rooms": [
			8.48598,
			4.674118
		],
		"buka 1": [
			8.481801,
			4.667622
		],
		"buka 10": [
			8.481483,
			4.6673
		],
		"buka 2": [
			8.481822,
			4.667353
		],
		"buka 7": [
			8.481456,
			4.667568
		],
		"bus admin": [
			8.486829,
			4.674732
		],
		"central mosque": [
			8.477913,
			4.670955
		],
		"chapel of the light": [
			8.476334,
			4.673543
		],
		"cis": [
			8.488815,
			4.674343
		],
		"cis mosque": [
			8.489246,
			4.674341
		],
		"compound a": [
			8.480645,
			4.671754
		],
		"compound b": [
			8.480385,
			4.672263
		],
		"compound c": [
			8.479929,
			4.671834
		],
		"compound d": [
			8.47978,
			4.671373
		],
		"compound e": [
			8.480348,
			4.671099
		],
		"comsit": [
			8.48277,
			4.676016
		],
		"cu building": [
			8.481743,
			4.666645
		],
		"dept of geology": [
			8.481725,
			4.676896
		],
		"education (new)": [
			8.473911,
			4.666871
		],
		"education (old)": [
			8.487535,
			4.676365
		],
		"elearning centre": [
			8.482829,
			4.675598
		],
		"elibrary": [
			8.482298,
			4.675362
		],
		"faculty of law": [
			8.48389,
			4.671537
		],
		"first bank": [
			8.477608,
			4.675743
		],
		"fountain": [
			8.478708,
			4.672473
		],
		"geology": [
			8.481693,
			4.676397
		],
		"geology auditorium": [
			8.481768,
			4.676408
		],
		"gtbank": [
			8.478069,
			4.676601
		],
		"indoor games bldg": [
			8.476038,
			4.66751
		],
		"kam abioye": [
			8.490932,
			4.671921
		],
		"kwara hostel": [
			8.481796,
			4.668088
		],
		"lagos hostel": [
			8.481138,
			4.670606
		],
		"law restaurant": [
			8.485463,
			4.675247
		],
		"lt1": [
			8.481797,
			4.673434
		],
		"lt2": [
			8.482205,
			4.673519
		],
		"lt3": [
			8.483829,
			4.673632
		],
		"lt4": [
			8.484174,
			4.673745
		],
		"michael hostel": [
			8.492184,
			4.67205
		],
		"microfinance bank": [
			8.481585,
			4.673664
		],
		"moringa plantation": [
			8.466038,
			4.661023
		],
		"motion ground": [
			8.482269,
			4.671336
		],
		"muslim brothers lodge": [
			8.47761,
			4.670423
		],
		"pace setters": [
			8.490937,
			4.672517
		],
		"pfa lt": [
			8.484961,
			4.673013
		],
		"pg": [
			8.491982,
			4.67359
		],
		"post office": [
			8.481115,
			4.672712
		],
		"probitas hostel": [
			8.492125,
			4.672597
		],
		"professorial suites": [
			8.485959,
			4.676692
		],
		"sch car park": [
			8.479613,
			4.670792
		],
		"school auditorium": [
			8.479386,
			4.673696
		],
		"school bookshop": [
			8.478467,
			4.675383
		],
		"school car park": [
			8.47935,
			4.670761
		],
		"school clinic": [
			8.482858,
			4.66888
		],
		"school library": [
			8.483152,
			4.672465
		],
		"scientific htl": [
			8.490751,
			4.673177
		],
		"senate building": [
			8.480055,
			4.67383
		],
		"sis biggs": [
			8.480873,
			4.670611
		],
		"sky chicken": [
			8.481796,
			4.668088
		],
		"slt": [
			8.481948,
			4.675437
		],
		"st thomas aquinas catholic church": [
			8.47729,
			4.673173
		],
		"stac": [
			8.477465,
			4.673812
		],
		"staff club": [
			8.477476,
			4.668963
		],
		"student affairs": [
			8.481573,
			4.671524
		],
		"student affairs atm": [
			8.481637,
			4.671636
		],
		"student union mart": [
			8.481159,
			4.667895
		],
		"sub": [
			8.482438,
			4.667461
		],
		"sugar research": [
			8.470196,
			4.664243
		],
		"uba": [
			8.477788,
			4.675308
		],
		"uba atm": [
			8.482558,
			4.675668
		],
		"ucu": [
			8.477449,
			4.674117
		],
		"ucu hostel": [
			8.477597,
			4.673721
		],
		"unilorin dam": [
			8.466896,
			4.666024
		],
		"unilorin fm": [
			8.488927,
			4.674305
		],
		"works": [
			8.49737,
			4.673735
		],
		"zamfara": [
			8.479306,
			4.669107
		],
		"zamfara hostel": [
			8.479308,
			4.669163
		]
	};

} );

var directionsDisplay;
var directionsService = new google.maps.DirectionsService ();

function initialize () {
	directionsDisplay = new google.maps.DirectionsRenderer ();
	var mapOptions = {
		zoom: 17,
		center: new google.maps.LatLng ( 8.480159, 4.673768 )
	};
	var map = new google.maps.Map ( document.getElementById ( 'map-canvas' ), mapOptions );
	directionsDisplay.setMap ( map );
	directionsDisplay.setPanel ( document.getElementById ( 'directions-panel' ) );
}

var mode = 'WALKING';
function switchMode () {

	mode = 'DRIVING'

}

function calcRoute () {
	console.log ( 'finding route' );
	var start = document.getElementById ( 'start' ).value;
	var end = document.getElementById ( 'end' ).value;
	start = locations[ start ];
	end = locations[ end ];
	console.log ( start, end );
	var startPos = new google.maps.LatLng ( start[ 0 ], start[ 1 ] );
	var endPos = new google.maps.LatLng ( end[ 0 ], end[ 1 ] );

	var request = {
		origin: startPos,
		destination: endPos,
		travelMode: google.maps.TravelMode.WALKING
	};
	directionsService.route ( request, function ( response, status ) {
		if ( status == google.maps.DirectionsStatus.OK ) {
			directionsDisplay.setDirections ( response );
		}
	} );
}

google.maps.event.addDomListener ( window, 'load', initialize );