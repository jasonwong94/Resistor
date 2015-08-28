var app = angular.module( 'ResistorApp', [] );

app.controller( 'ResistorController', ResistorController );

function ResistorController(){
	var instance = this;

	instance.resistorList = require( './resistor.json' );
	instance.numBands = 4;

};