var app = angular.module( 'ResistorApp', [] );

app.controller( 'ResistorController', ResistorController );

function ResistorController(){
	var instance = this;

	instance.ResistorList = require( './resistor.json' );
	instance.NumColorBands = 4;
	instance.BandList = [];

	initialize();

	function initialize(){
		for( var i = 0; i< instance.NumColorBands; i++){
			var name= 'band' + i;
			instance.BandList.push( {'Value': null } );
		}
		console.log( instance.BandList );
	}

};