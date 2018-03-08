$(document).ready(function() {
	let playGame = confirm("Do you want to play a game?");

	if (playGame) {
		let arrayCell = $("td");
		let randomBombSet = bombSet(arrayCell);

		arrayCell.click(function() {
			$(this).css({ "background-color": "red" });
		});
		$("table").fadeTo(3000, 1);
	}

	function bombSet(cell) {
		console.log(cell);
	}
});
