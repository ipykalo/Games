$(document).ready(function() {
	let playGame = confirm("Do you want to play a game?");
	let clic = 0;

	if (playGame) {
		$("table").fadeTo(3000, 1);
		let arrayCell = $("td");
		let randomBombSet = bombSet(arrayCell);
		console.log(randomBombSet);

		arrayCell.click(function() {
			$(this).attr("class", "miss");
			for (let i in randomBombSet) {
				if (
					$(this)[0].offsetTop == randomBombSet[i].offsetTop &&
					$(this)[0].offsetLeft == randomBombSet[i].offsetLeft
				) {
					$(this).attr("class", "mine");
					++clic;
					if (clic == 3) {
						console.log("lose");
						playGame = false;
					}
				}
			}
		});
	} /*else if (clic == 3) {
		$("table").fadeOut(3000, 0.1);
		console.log("lose");
		playGame = false;
	}*/

	function bombSet(cell) {
		let randomCell = [];
		let bombOne = Math.floor(Math.random() * 100);
		let bombTwo = Math.floor(Math.random() * 100);
		let bobmThree = Math.floor(Math.random() * 100);
		let bombFour = Math.floor(Math.random() * 100);
		let bombFive = Math.floor(Math.random() * 100);
		let bombSix = Math.floor(Math.random() * 100);
		let bombSeven = Math.floor(Math.random() * 100);
		let bobmEight = Math.floor(Math.random() * 100);
		let bombNine = Math.floor(Math.random() * 100);
		let bombTen = Math.floor(Math.random() * 100);

		for (let i = 0; i < cell.length; i++) {
			if (
				i == bombOne ||
				i == bombTwo ||
				i == bobmThree ||
				i == bombFour ||
				i == bombFive ||
				i == bombSix ||
				i == bombSeven ||
				i == bobmEight ||
				i == bombNine ||
				i == bombTen
			) {
				randomCell.push(cell[i]);
			}
		}

		return randomCell;
	}
});
