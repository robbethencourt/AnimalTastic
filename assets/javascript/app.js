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
		var critically_endangered = $('#critically-endangered');
		var endangered = $('#endangered');
		var vulnerable = $('#vulnerable');
		var near_threatened = $('#near-threatened');
		var added_animal = $('#added-animal');
		var animal_gif = $('#animal-gif');

		var gif_bucket_1 = $('#gif-bucket-1');
		var gif_bucket_2 = $('#gif-bucket-2');
		var gif_bucket_3 = $('#gif-bucket-3');
		var gif_bucket_4 = $('#gif-bucket-4');
		var gif_bucket_5 = $('#gif-bucket-5');
		var gif_bucket_6 = $('#gif-bucket-6');


		// functions

		// the ajax request from giphy for the animal selected
		function queryAnimals(animal_passed) {
			
			// store the passed animal data-name in the animal_to_query variable
			var animal_to_query = animal_passed;

			// the number of gifs to return
			var number_of_gifs = 12;

			// store the giphy api url in the api variable
			var api = 'http://api.giphy.com/v1/gifs/search?q=' + animal_to_query + '&limit=' + number_of_gifs + '&api_key=dc6zaTOxFJmzC'

			// request object to store the object to be passed to the ajax call
			var request = {
				url: api,
				method: 'GET'
			};

			// ajax call to the giphy api
			$.ajax(request)

				// response back from the giphy api
				.done(function (response) {
					
					// passing the response from giphy to the displayAnimals() function so that the logic for displaying the information is easier to read
					displayAnimals(response);

				}); // end ajax

		} // end queryAnimals()

		function displayAnimals(ajax_response) {

			// empty the gif-bucket divs that displays the gifs. This is so we only display the current button selected by the user.
			$(gif_bucket_1).empty();
			$(gif_bucket_2).empty();
			$(gif_bucket_3).empty();
			$(gif_bucket_4).empty();
			$(gif_bucket_5).empty();
			$(gif_bucket_6).empty();

			function gifBucket(index_num, bucket_id) {
				
				// create the div to hold each animal gif with rating
				var animal_div = $('<div>');

				// add animal-div class to each of these divs
				animal_div.addClass('animal-div');

				// create the image element to hold the gif
				var animal_img = $('<img>');

				// add the still image url to the image source attribute
				animal_img.attr('src', ajax_response.data[index_num].images.fixed_width_still.url);

				// add the still image url to the image source attribute
				animal_img.attr('data-still', ajax_response.data[index_num].images.fixed_width_still.url);

				// add the data-state attribute and set it to still so we can check for this on the click function and update it to 'animate' once it's been clicked
				animal_img.attr('data-state', 'still');

				// add the non still version as a data-name attribute
				animal_img.attr('data-animate', ajax_response.data[index_num].images.fixed_width.url);

				// add an alt attribute to the image element so people with screen readers
				animal_img.attr('alt', ajax_response.data[index_num].slug);

				// create a p element to hold the rating
				var p = $('<p>');

				// add the rating to the p element
				$(p).text('Rating: ' + ajax_response.data[index_num].rating);

				// append the image element (gif) to the animal_div
				$(animal_div).append(animal_img);

				// append the p element holding the gif rating to the animal_div
				$(animal_div).append(p);

				// append the animal_div to the gif_bucket div
				$(bucket_id).append(animal_div);

			} //  end gifBucket()

			// loop through the animal_response so we can add each returned gif to the screen
			for (var i = 0; i < ajax_response.data.length; i++) {

				// put the first 3 gifs in the first gif bucket div
				if (i < 2) {

					gifBucket(i, gif_bucket_1);

				} // end if

				// put the 4, 5 and 6 gifs in the second gif bucket div
				if (i > 1 && i < 4) {

					gifBucket(i, gif_bucket_2);

				} // end if

				// put the 7, 8 and 9 gifs in the third gif bucket div
				if (i > 3 && i < 6) {

					gifBucket(i, gif_bucket_3);
					
				} // end if

				// put the last 3 gifs in the fourth gif bucket div
				if (i > 5 && i < 8) {

					gifBucket(i, gif_bucket_4);
					
				} // end if

				// put the last 3 gifs in the fourth gif bucket div
				if (i > 7 && i < 10) {

					gifBucket(i, gif_bucket_5);
					
				} // end if

				// put the last 3 gifs in the fourth gif bucket div
				if (i > 9) {

					gifBucket(i, gif_bucket_6);
					
				} // end if

			} // end for

		} // end displayAnimals()

		function createButtons() {
			
			// enpty each of the ul elements so we can then repopulate them with updated buttons
			critically_endangered.empty();
			endangered.empty();
			vulnerable.empty();
			near_threatened.empty();
			added_animal.empty();

			// loop through the anials array
			for (var i = 0; i < animals.length; i++) {

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
					case 'Added Animal':

						animalsToList(added_animal);

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

		// call the createButtons function when the page loads to add the buttons for the animals listed in the animals array
		createButtons();

		function addAnimals() {
			
			// get the value of the text box
			var animal_to_add = $('#animal-input').val();

			// create a new Animal object
			var Animal = new Object();

			// set the Animal object to the one entered and add the Added Animal status so that it sets it in the correct div on the page
			Animal = {name: animal_to_add, status: 'Added Animal'};

			// push the animal to add into the animals array
			animals.push(Animal);

			// run create buttons so that the new button with the added animal gets added
			createButtons();

		} // end addAnimals()

		function playPauseGif(event, state_to_pass) {
			
			// if the state of the element is still
			if (state_to_pass === 'still') {

				// change the source of the element so that the gif plays
				$(event).attr('src', $(event).attr('data-animate'));

				// update the data-state attribute to animate so we can pause it on the next click
				$(event).attr('data-state', 'animate');

			// if the state of the element is not still (meaning it's probably set to animagte)
			} else {

				// update the source of the element so that the gif gets set to the still url
				$(event).attr('src', $(event).attr('data-still'));

				// update the data-state to still
				$(event).attr('data-state', 'still');

			} // end if else

		} // end playPauseGif()


		// on click events

		// click event for adding an animal button to the screen
		$('#add-animal-button').on('click', function () {

			// call the addAnimals() function
			addAnimals();

			// return false so the form doesn't submit and refresh the page
			return false;

		}); // end click event on the add animal form

		// click event for each button with .animal class
		$('#animal-list').on('click', '.animal', function () {

			// grab the data name of the button clicked so we know what animal to query when we pass that to the queryAnimals() function
			var animal_data_name = $(this).data('name');
			
			// call the queryAnimals function wiht the name fo the animal to pass
			queryAnimals(animal_data_name);

		}); // end click event on the animal name buttons

		// click event for each gif so that it can be played or paused
		$('#animal-gif').on('click', 'img', function () {

			// store the this keyword in the e variable. Is this the best way to pass this?
			var e = $(this);

			// store the data-state of the elment clicked in the state variable
			var state = $(this).attr('data-state');

			// if statement determining the class name of the gif
			if (state === "still") {

				// call the playPauseGif() function with the this keyword and 'still' string as a parameter
				playPauseGif(e, 'still');

			} else {

				// call the playPauseGif() function with the this keyword and 'animate' string as a parameter
				playPauseGif(e, 'animate');

			} // end if else
			
		}); // end click event on gif

	} // end animalTastic()
		
	// call the main animalTastic() function at the load of the page
	animalTastic();

	// scroll script for nav links
	$("nav a[href^='#']").on('click', function(e) {

	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(hash).offset().top
	     }, 300, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });

	});

});