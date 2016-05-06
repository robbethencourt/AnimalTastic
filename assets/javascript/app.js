// Javascript function that wraps everything
$(document).ready(function(){

	function animalTastic() {
		
		// array of animals with the endangered status. The endagered status will let me place them in the correct ul
		var animals = [
			{
				name: 'Amur Leopard',
				status: 'Critically Endangered'
			}, {
				name: 'Black Rhino',
				status: 'Critically Endangered'
			}, {
				name: 'Cross River Gorilla',
				status: 'Critically Endangered'
			}, {
				name: 'Hawksbill Turtle',
				status: 'Critically Endangered'
			}, {
				name: 'Javan Rhino',
				status: 'Critically Endangered'
			}, {
				name: 'Leatherback Turtle',
				status: 'Critically Endangered'
			}, {
				name: 'Mountain Gorilla',
				status: 'Critically Endangered'
			}, {
				name: 'Pangolin',
				status: 'Critically Endangered'
			}, {
				name: 'Saola',
				status: 'Critically Endangered'
			}, {
				name: 'South China Tiger',
				status: 'Critically Endangered'
			}, {
				name: 'Sumatran Elephant',
				status: 'Critically Endangered'
			}, {
				name: 'Sumatran Orangutan',
				status: 'Critically Endangered'
			}, {
				name: 'Sumatran Rhino',
				status: 'Critically Endangered'
			}, {
				name: 'Sumatran Tiger',
				status: 'Critically Endangered'
			}, {
				name: 'Vaquita',
				status: 'Critically Endangered'
			}, {
				name: 'Western Lowland Gorilla',
				status: 'Critically Endangered'
			}, {
				name: 'Yangtze Finless Porpoise',
				status: 'Critically Endangered'
			}, {
				name: 'African Wild Dog',
				status: 'Endangered'
			}, {
				name: 'Amur Tiger',
				status: 'Endangered'
			}, {
				name: 'Asian Elephant',
				status: 'Endangered'
			}, {
				name: 'Bengal Tiger',
				status: 'Endangered'
			}, {
				name: 'Black Spider Monkey',
				status: 'Endangered'
			}, {
				name: 'Black-footed Ferret',
				status: 'Endangered'
			}, {
				name: 'Blue Whale',
				status: 'Endangered'
			}, {
				name: 'Bluefin Tuna',
				status: 'Endangered'
			}, {
				name: 'Bonobo',
				status: 'Endangered'
			}, {
				name: 'Bornean Orangutan',
				status: 'Endangered'
			}, {
				name: 'Borneo Pygmy Elephant',
				status: 'Endangered'
			}, {
				name: 'Chimpanzee',
				status: 'Endangered'
			}, {
				name: 'Eastern Lowland Gorilla',
				status: 'Endangered'
			}, {
				name: 'Fin Whale',
				status: 'Endangered'
			}, {
				name: 'Galapagos Penguin',
				status: 'Endangered'
			}, {
				name: 'Ganges River Dolphin',
				status: 'Endangered'
			}, {
				name: 'Giant Panda',
				status: 'Endangered'
			}, {
				name: 'Green Turtle',
				status: 'Endangered'
			}, {
				name: "Hector's Dolphin",
				status: 'Endangered'
			}, {
				name: 'Humphead Wrasse',
				status: 'Endangered'
			}, {
				name: 'Indian Elephant',
				status: 'Endangered'
			}, {
				name: 'Indohinese Tiger',
				status: 'Endangered'
			}, {
				name: 'Loggerhead Turtle',
				status: 'Endangered'
			}, {
				name: 'Malayan Tiger',
				status: 'Endangered'
			}, {
				name: 'North Atlantic Right Whale',
				status: 'Endangered'
			}, {
				name: 'Orangutan',
				status: 'Endangered'
			}, {
				name: 'Sea Lions',
				status: 'Endangered'
			}, {
				name: 'Snow Leopard',
				status: 'Endangered'
			}, {
				name: 'Sri Lankan Elephant',
				status: 'Endangered'
			}, {
				name: 'Tiger',
				status: 'Endangered'
			}, {
				name: 'Whale',
				status: 'Endangered'
			}, {
				name: 'African Elephant',
				status: 'Vulnerable'
			}, {
				name: 'Bigeye Tuna',
				status: 'Vulnerable'
			}, {
				name: 'Dugong',
				status: 'Vulnerable'
			}, {
				name: 'Forest Elephant',
				status: 'Vulnerable'
			}, {
				name: 'Giant Tortoise',
				status: 'Vulnerable'
			}, {
				name: 'Great White Shark',
				status: 'Vulnerable'
			}, {
				name: 'Greater One-Horned Rhino',
				status: 'Vulnerable'
			}, {
				name: 'Hippopotamus',
				status: 'Vulnerable'
			}, {
				name: 'Irrawaddy Dolphin',
				status: 'Vulnerable'
			}, {
				name: 'Marine Iguana',
				status: 'Vulnerable'
			}, {
				name: 'Olive Ridley Turtle',
				status: 'Vulnerable'
			}, {
				name: 'Polar Bear',
				status: 'Vulnerable'
			}, {
				name: 'Red Panda',
				status: 'Vulnerable'
			}, {
				name: 'Savanna Elephant',
				status: 'Vulnerable'
			}, {
				name: 'Southern Rockhopper Penguin',
				status: 'Vulnerable'
			}, {
				name: 'Whale Shark',
				status: 'Vulnerable'
			}, {
				name: 'Albacore Tuna',
				status: 'Near Threatened'
			}, {
				name: 'Beluga',
				status: 'Near Threatened'
			}, {
				name: 'Greater Sage-Grouse',
				status: 'Near Threatened'
			}, {
				name: 'Jaguar',
				status: 'Near Threatened'
			}, {
				name: 'Monarch Butterfly',
				status: 'Near Threatened'
			}, {
				name: 'Mountain Plover',
				status: 'Near Threatened'
			}, {
				name: 'Narwhal',
				status: 'Near Threatened'
			}, {
				name: 'Plains Bison',
				status: 'Near Threatened'
			}, {
				name: 'White Rhino',
				status: 'Near Threatened'
			}, {
				name: 'Yellowfin Tuna',
				status: 'Near Threatened'
			}
		];

		// variables
		//var ul_array = [$('#critically-endangered'), $('#endangered'), $('#vulnerable'), $('#near-threatened'), $('#added-animals')]
		var critically_endangered = $('#critically-endangered');
		var endangered = $('#endangered');
		var vulnerable = $('#vulnerable');
		var near_threatened = $('#near-threatened');
		var added_animals = $('#added-animals');

		// functions

		// the ajax request from giphy for the animal selected
		function queryAnimals() {
			// body...
		} // end queryAnimals()

		function displayAnimals() {
			// body...
		} // end displayAnimals()

		function createButtons() {
			
			// enpty each of the ul elements so we can then repopulate them with updated buttons
			critically_endangered.empty();
			endangered.empty();
			vulnerable.empty();
			near_threatened.empty();
			added_animals.empty();

			// loop through the anials array
			for (var i = 0; i < animals.length; i++) {

				console.log(animals[i].status);

				// create a list item to house the animal
				var animals_button = $('<button>');

				// set the class of this li to .animal
				animals_button.addClass('animal list-group-item');
				
				// switch statement for placing the animals in the correct ul
				switch(animals[i].status) {

					// if the animal's status is critically endangered
					case 'Critically Endangered':

						animalsToList(critically_endangered);

						break;

					// if the animal's status is critically endangered
					case 'Endangered':

						animalsToList(endangered);

						break;

					// if the animal's status is critically endangered
					case 'Vulnerable':

						animalsToList(vulnerable);

						break;

					// if the animal's status is critically endangered
					case 'Near Threatened':

						animalsToList(near_threatened);

						break;

					// if the animal's status is critically endangered
					case 'Added Animals':

						animalsToList(added_animals);

						break;

				} // end switch

				function animalsToList(ul_element) {
					
					// set the data-name attribute to the name of the animal
					animals_button.attr('data-name', animals[i].name);

					// set the text of the li to the animal
					animals_button.text(animals[i].name);

					// append the li element to the critically-endangered ul 
					ul_element.append(animals_button);

				} // end animalsToList()

			} // end for loop

		} // end createButtons()

		// on click events

		// run functions
		createButtons();

	}
		
	animalTastic();

});