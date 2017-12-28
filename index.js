

$(document).ready(function() {

	var random, next, current, computer;
  var computerWin = false;
  var playerWin = false;
  var numsFilled = 0;
  var currentInPlay = false;
	var currentPlay = [];
	var computerPlay = [];
	var inUse = [];
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var combo = [];
  var playerSession = 0;
  var computerSession = 0;

function restart () {
  clearBoard();
	$('#gameBoard').removeClass('hide');
  $('#tie').addClass('hide');
	$('#win').addClass('hide');
	$('#lose').addClass('hide');

}

function makeCombo () {
  combo.length = 0;
  next = "";
  for (var i = 0; i < arr.length; i++) {
    if (inUse.indexOf(arr[i]) === -1) {
      combo.push(arr[i]);
    }
  }
  randomize(combo);
  next = combo[random];
}

$('#x').click(function() {
	current = "X";
	computer = "O";
	$('#first').addClass('hide');
	$('#gameBoard').removeClass('hide');

})

$('#o').click(function(){
	current = "O";
	computer= "X";
	$('#first').addClass('hide');
	$('#gameBoard').removeClass('hide');
})

function randomize (arr) {
	random = Math.floor(Math.random() * (arr.length));
};

function wait(place, letter) {
	setTimeout (function() {$('#' +       place).html(letter);}, 1000);
  setTimeout (function() {currentInPlay = false}, 1000);
};

function clearBoard() {
  currentInPlay = false;
  computerWin =  false;
  playerWin = false;
  numsFilled = 0;
  inUse.length = 0;
  currentPlay.length = 0;
  computerPlay.length = 0;
	$('#one').empty();
	$('#two').empty();
	$('#three').empty();
	$('#four').empty();
	$('#five').empty();
	$('#six').empty();
	$('#seven').empty();
	$('#eight').empty();
	$('#nine').empty();
}

function tie() {
  if (numsFilled >= 9 && playerWin !== true && computerWin !== true) {
    setTimeout(function(){
      clearBoard();
      $('#tie').removeClass('hide');
      $('#gameBoard').addClass('hide');
    }, 1000);
    setTimeout(function() {
      restart()}, 3000);
  }
}

function youWin() {
playerWin = true;
$('#tie').addClass('hide');
$('#gameBoard').addClass('hide');
$('#win').removeClass('hide');
inUse.length = 0;
currentPlay.length = 0;
computerPlay.length = 0;
playerSession = playerSession + 1;
  $('#player-score').html(playerSession);

}

function computerWins() {
computerWin = true;
$('#tie').addClass('hide');
$('#gameBoard').addClass('hide');
$('#lose').removeClass('hide');
inUse.length = 0;
currentPlay.length = 0;
computerPlay.length = 0;
computerSession = computerSession + 1;
  $('#computer-score').html(computerSession);

}

function markBoard(){
  if (next === 1) {
    numsFilled = numsFilled + 1;
    inUse.push(1);
    computerPlay.push(1);
    wait('one', computer);
    tie();
  }
  if (next === 2) {
    numsFilled = numsFilled + 1;
    inUse.push(2);
    computerPlay.push(2);
    wait('two', computer);
    tie();
  }
 if (next === 3) {
    numsFilled = numsFilled + 1;
    inUse.push(3);
    computerPlay.push(3);
    wait('three', computer);
    tie();
  }
  if (next === 4) {
    numsFilled = numsFilled + 1;
    inUse.push(4);
    computerPlay.push(4);
    wait('four', computer);
    tie();
  }
  if (next === 5) {
    numsFilled = numsFilled + 1;
    inUse.push(5);
    computerPlay.push(5);
    wait('five', computer);
    tie();
  }
  if (next === 6) {
    numsFilled = numsFilled + 1;
    inUse.push(6);
    computerPlay.push(6);
    wait('six', computer);
    tie();
  }
  if (next === 7) {
    numsFilled = numsFilled + 1;
    inUse.push(7);
    computerPlay.push(7);
    wait('seven', computer);
    tie();
  }
  if (next === 8) {
    numsFilled = numsFilled + 1;
    inUse.push(8);
    computerPlay.push(8);
    wait('eight', computer);
    tie();
  }
  if (next === 9) {
    numsFilled = numsFilled + 1;
    inUse.push(9);
    computerPlay.push(9);
    wait('nine', computer);
    tie();
  }
}

function winner() {
  if (currentPlay.indexOf(1) !== -1 && currentPlay.indexOf(2) !== -1 && currentPlay.indexOf(3) !== -1) {
    playerWin = true;
    next = '';
    setTimeout(function() {youWin()}, 1000);
				setTimeout(function() {restart()}, 3000);
	}

	else if (currentPlay.indexOf(4) !== -1 && currentPlay.indexOf(5) !== -1 && currentPlay.indexOf(6) !== -1) {

    playerWin = true;
    next = '';
		setTimeout(function() {youWin()}, 1000);
				setTimeout(function() {restart()}, 3000);
	}

	else if (currentPlay.indexOf(7) !== -1 && currentPlay.indexOf(8) !== -1 && currentPlay.indexOf(9) !== -1) {
    playerWin = true;
    next = '';
		setTimeout(function() {youWin()}, 1000);
				setTimeout(function() {restart()}, 3000);
	}

	else if (currentPlay.indexOf(1) !== -1 && currentPlay.indexOf(4) !== -1 && currentPlay.indexOf(7) !== -1) {
    playerWin = true;
    next = '';
		setTimeout(function() {youWin()}, 1000);
				setTimeout(function() {restart()}, 3000);
	}

	else if (currentPlay.indexOf(2) !== -1 && currentPlay.indexOf(5) !== -1 && currentPlay.indexOf(8) !== -1) {
    playerWin = true;
    next = '';
		setTimeout(function() {youWin()}, 1000);
				setTimeout(function() {restart()}, 3000);
	}

	else if (currentPlay.indexOf(3) !== -1 && currentPlay.indexOf(6) !== -1 && currentPlay.indexOf(9) !== -1) {
    playerWin = true;
    next = '';
		setTimeout(function() {youWin()}, 1000);
				setTimeout(function() {restart()}, 3000);
	}

	else if (currentPlay.indexOf(1) !== -1 && currentPlay.indexOf(5) !== -1 && currentPlay.indexOf(9) !== -1) {
    playerWin = true;
    next = '';
		setTimeout(function() {youWin()}, 1000);
				setTimeout(function() {restart()}, 3000);
	}

	else if (currentPlay.indexOf(3) !== -1 && currentPlay.indexOf(5) !== -1 && currentPlay.indexOf(7) !== -1) {
    playerWin = true;
    next = '';
		setTimeout(function() {youWin()}, 1000);
				setTimeout(function() {restart()}, 3000);
	} else if (computerPlay.indexOf(1) !== -1 && computerPlay.indexOf(2) !== -1 && computerPlay.indexOf(3) !== -1 && playerWin !== true) {
		computerWin = true;
    setTimeout(function() {computerWins()}, 1500);
				setTimeout(function() {restart()}, 3000);
	}

	else if (computerPlay.indexOf(4) !== -1 && computerPlay.indexOf(5) !== -1 && computerPlay.indexOf(6) !== -1 && playerWin !== true) {
		computerWin = true;
    setTimeout(function() {computerWins()}, 1500);
				setTimeout(function() {restart()}, 4000);
	}

	else if (computerPlay.indexOf(7) !== -1 && computerPlay.indexOf(8) !== -1 && computerPlay.indexOf(9) !== -1 && playerWin !== true) {
    computerWin = true;
		setTimeout(function() {computerWins()}, 1500);
				setTimeout(function() {restart()}, 4000);
	}

	else if (computerPlay.indexOf(1) !== -1 && computerPlay.indexOf(4) !== -1 && computerPlay.indexOf(7) !== -1 && playerWin !== true) {
    computerWin = true;
		setTimeout(function() {computerWins()}, 1500);
				setTimeout(function() {restart()}, 4000);
	}

	else if (computerPlay.indexOf(2) !== -1 && computerPlay.indexOf(5) !== -1 && computerPlay.indexOf(8) !== -1 && playerWin !== true) {
    computerWin = true;
		setTimeout(function() {computerWins()}, 1500);
				setTimeout(function() {restart()}, 4000);
	}

	else if (computerPlay.indexOf(3) !== -1 && computerPlay.indexOf(6) !== -1 && computerPlay.indexOf(9) !== -1 && playerWin !== true) {
    computerWin = true;
		setTimeout(function() {computerWins()}, 1500);
				setTimeout(function() {restart()}, 4000);
	}

	else if (computerPlay.indexOf(1) !== -1 && computerPlay.indexOf(5) !== -1 && computerPlay.indexOf(9) !== -1 && playerWin !== true) {
    computerWin = true;
		setTimeout(function() {computerWins()}, 1500);
				setTimeout(function() {restart()}, 4000);
	}

	else if (computerPlay.indexOf(3) !== -1 && computerPlay.indexOf(5) !== -1 && computerPlay.indexOf(7) !== -1 && playerWin !== true) {
    computerWin = true;
		setTimeout(function() {computerWins()}, 1500);
				setTimeout(function() {restart()}, 4000);
	}
}
  //reset game
  $('#start-over').click(function() {
    clearBoard();
    playerSession = 0;
    computerSession = 0;
    $('#player-score').empty();
    $('#computer-score').empty();
    $('#gameBoard').addClass('hide');
    $('#first').removeClass('hide');
  })
  //#one
	$('#one').click(function() {
		if (inUse.indexOf(1) !== -1) {
			alert("You can not choose a square that is already in play. Please try a different square.");
		} else if (currentInPlay === true) {
      alert('Please wait your turn.');
    } else {
      currentInPlay = true;
      numsFilled = numsFilled + 1;
		$('#one').html(current);
		inUse.push(1);
		currentPlay.push(1);
    makeCombo();
		markBoard();
    tie();
		}
				winner();
	})
	//#two
	$('#two').click(function() {
		if (inUse.indexOf(2) !== -1) {
			alert("You can not choose a square that is already in play. Please try a different square.");
		} else if (currentInPlay === true) {
      alert('Please wait your turn.');
    } else {
      currentInPlay = true;
      numsFilled = numsFilled + 1;
		$('#two').html(current);
		inUse.push(2);
		currentPlay.push(2);
    makeCombo();
		markBoard();
    tie();
		}
				winner();
	})
	 //#three
	$('#three').click(function() {
		if (inUse.indexOf(3) !== -1) {
			alert("You can not choose a square that is already in play. Please try a different square.");
		} else if (currentInPlay === true) {
      alert('Please wait your turn.');
    } else {
      currentInPlay = true;
      numsFilled = numsFilled + 1;
		$('#three').html(current);
		inUse.push(3);
		currentPlay.push(3);
    makeCombo();
		markBoard();
    tie();
		}
				winner();
})
	//#four
	$('#four').click(function() {
		if (inUse.indexOf(4) !== -1) {
			alert("You can not choose a square that is already in play. Please try a different square.");
		} else if (currentInPlay === true) {
      alert('Please wait your turn.');
    } else {
      currentInPlay = true;
      numsFilled = numsFilled + 1;
		$('#four').html(current);
		inUse.push(4);
		currentPlay.push(4);
    makeCombo();
		markBoard();
    tie();
		}
				winner();
	})
	//#five
	$('#five').click(function() {
		if (inUse.indexOf(5) !== -1) {
			alert("You can not choose a square that is already in play. Please try a different square.");
		} else if (currentInPlay === true) {
      alert('Please wait your turn.');
    } else {
      currentInPlay = true;
      numsFilled = numsFilled + 1;
		$('#five').html(current);
		inUse.push(5);
		currentPlay.push(5);
    makeCombo();
		markBoard();
    tie();
		}
				winner();
	})
	//#six
	$('#six').click(function() {
		if (inUse.indexOf(6) !== -1) {
			alert("You can not choose a square that is already in play. Please try a different square.");
		} else if (currentInPlay === true) {
      alert('Please wait your turn.');
    } else {
      currentInPlay = true;
      numsFilled = numsFilled + 1;
		$('#six').html(current);
		inUse.push(6);
		currentPlay.push(6);
    makeCombo();
		markBoard();
    tie();
		}
				winner();
	})
	//#seven
	$('#seven').click(function() {
		if (inUse.indexOf(7) !== -1) {
			alert("You can not choose a square that is already in play. Please try a different square.");
		} else if (currentInPlay === true) {
      alert('Please wait your turn.');
    } else {
      currentInPlay = true;
      numsFilled = numsFilled + 1;
		$('#seven').html(current);
		inUse.push(7);
		currentPlay.push(7);
    makeCombo();
		markBoard();
    tie();
		}
				winner();
	})
	//#eight
	$('#eight').click(function() {
		if (inUse.indexOf(8) !== -1) {
			alert("You can not choose a square that is already in play. Please try a different square.");
		} else if (currentInPlay === true) {
      alert('Please wait your turn.');
    } else {
      currentInPlay = true;
      numsFilled = numsFilled + 1;
		$('#eight').html(current);
		inUse.push(8);
		currentPlay.push(8);
    makeCombo();
		markBoard();
    tie();
		}
				winner();
	})
	//#nine
	$('#nine').click(function() {
		if (inUse.indexOf(9) !== -1) {
			alert("You can not choose a square that is already in play. Please try a different square.");
		} else if (currentInPlay === true) {
      alert('Please wait your turn.');
    } else {
      currentInPlay = true;
      numsFilled = numsFilled + 1;
		$('#nine').html(current);
		inUse.push(9);
		currentPlay.push(9);
    makeCombo();
		markBoard();
    tie();
		}
				winner();
	})
})
