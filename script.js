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
				return 'Road Builders';
			case 'Q':
				return 'Development Card';
			case 2:
				return 'Take 2 Resources';
			case 3:
				return 'Brick, Wool, Grain';
			// ie, Ace or Joker
			default:
				return 'Take 1 Resource';
		}
	}
}

$(document).ready(function() {
	var $button = $('.button'),
			$result = $('.result'),
			$remaining = $('#remaining'),
			result;

	$button.on('click', function() {
		result = generateTreasure();
		$result.html(result);
		$remaining.html(arr.length);
	});
});