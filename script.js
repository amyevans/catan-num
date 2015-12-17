// Build deck according to http://www.catanmaps.com/the-treasure-islands/
var arr = ['K', 'K', 'K', 'K', 'Q', 'Q', 'Q', 'Q', 2, 2, 2, 2, 3, 3, 3, 'A', 'A', 'A', 'A', 'Joker'];

// Shuffle deck
shuffle(arr);

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;
	// While there remain elements to shuffle
	while (0 !== currentIndex) {
		// Pick a remaining element
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

function generateTreasure() {
	var card;
	if (arr.length === 0) {
		return 'No more cards left!';
	} else {
		card = arr.shift();
		switch (card) {
			case 'K':
				return '<p>Take a road builders card</p><img src="img/road-building.jpg" />';
			case 'Q':
				return '<p>Take a random development card</p><img src="img/all-dev-cards.jpg" />';
			case 2:
				return '<p>Take any two resources</p><img src="img/all-resources.jpg" />';
			case 3:
				return '<p>Take brick, sheep, and wheat</p><img src="img/brick-sheep-wheat.jpg" />';
			// ie, Ace or Joker
			default:
				return '<p>Take any one resource</p><img src="img/all-resources.jpg" />';
		}
	}
}

$(document).ready(function() {
	var $button = $('.button'),
			$result = $('.result span'),
			$remaining = $('#remaining'),
			result;

	$button.on('click', function() {
		result = generateTreasure();
		$result.hide().html(result).fadeIn("slow");
		$remaining.hide().html(arr.length).fadeIn("slow");
	});
});