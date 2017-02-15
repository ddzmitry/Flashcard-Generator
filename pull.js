var jsonfile = require('jsonfile')
var file = 'data.json'
var chalk = require('chalk');
var colors = require('colors');
var arrForPlay = [];
var inquirer = require('inquirer');



//function that looks for all index cards in data.JSON file
function LookUpdates() {
	jsonfile.readFile(file, function(err, obj) {

		// console.log(obj.cards)
		obj.cards.forEach(function(element, index) {
			var i = index + 1;


			console.log(colors.yellow(`----------------Card ${i}-------------------`))

			console.log(colors.red.italic(`Front:${element.front}`))
			console.log(colors.green.italic(`Back:${element.back}`))

			console.log(colors.yellow(`-----------------------------------------`))


		});
	})
}








module.exports = {
	LookUpdates

}