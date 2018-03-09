$(document).ready(function() {
	let boom = document.querySelector("#boom");
	let lostSound = document.querySelector("#loseSound");
	let playGame = confirm("Do you want to play a game?");
	let clic = 0;
	let lose = 5;

	if (playGame) {
		game();
	} else {
		alert("Good bye!");
	}

	function game() {
		let miss;
		$("table").fadeTo(3000, 1);
		$(".result").fadeTo(3000, 1);
		let arrayCell = $("td");
		let randomBombSet = bombSet(arrayCell);

		$("#bomb").html(randomBombSet.length);
		miss = arrayCell.length - randomBombSet.length - clic;

		arrayCell.click(function(event) {
			$(this).attr("class", "miss");
			--miss;

			if (miss == 0) {
				alert("you winn");
			}

			for (let i in randomBombSet) {
				if (
					$(this)[0].offsetTop == randomBombSet[i].offsetTop &&
					$(this)[0].offsetLeft == randomBombSet[i].offsetLeft
				) {
					boom.play();
					$(this).attr("class", "mine");
					++clic;
					--lose;
					$("#lose").html(lose);
				}
			}
			if (clic == 5) {
				lostSound.play();
				$("#lose").html("You lost!");
				$("table").fadeOut(5000, 0, function() {
					$(".result").fadeOut(3000, 0);
					$(".box").fadeTo(5000, 1, playAgain);
				});
			}
		});
	}

	function playAgain() {
		location.reload();
	}

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
