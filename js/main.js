const game = ["s", "p", "r"];

let player1Score = 0;
let player2Score = 0;


let isRemoteControl = false;

// console.log(randomElement);

function isWin(isPlayer1Win) {
  playerFirstTitle.innerHTML = isPlayer1Win ? "WIN" : "LOSE";
  playerSecondTitle.innerHTML = !isPlayer1Win ? "WIN" : "LOSE";

  playerFirstTitle.classList.remove(
    `text-${isPlayer1Win ? "danger" : "success"}`
  );

  playerFirstTitle.classList.add(`text-${isPlayer1Win ? "success" : "danger"}`);

  //second
  playerSecondTitle.classList.add(
    `text-${!isPlayer1Win ? "success" : "danger"}`
  );

  playerSecondTitle.classList.remove(
    `text-${!isPlayer1Win ? "danger" : "success"}`
  );
}

function showGame(p1, p2) {
  playerFirstScore.innerText = `Score: ${player1Score}`;
  playerSecondScore.innerText = `Score: ${player2Score}`;

  scissors.src = `./assets/images/${p1}.png`;
  paper.src = `./assets/images/${p2}.png`;
}

function startGame(e) {
  if (isRemoteControl) return;

  const firstPlayerChoose = e.key;


  if (!game.includes(firstPlayerChoose)) {
    alert("Please correct choose item: 's,p,r'");
    return;
  }

  const compPlayerChoose = randomElement(game);

  console.log("firstPlayerChoose", firstPlayerChoose);
  console.log("compPlayerChoose", compPlayerChoose);

  if (
    (firstPlayerChoose === "s" && compPlayerChoose === "p") ||
    (firstPlayerChoose === "p" && compPlayerChoose === "r") ||
    (firstPlayerChoose === "r" && compPlayerChoose === "s")
  ) {
    console.log("You WIN");
    console.log("COMP Lose");

    player1Score += 1;

    isWin(true);
    showGame(firstPlayerChoose, compPlayerChoose);
  } else if (
    (firstPlayerChoose === "s" && compPlayerChoose === "s") ||
    (firstPlayerChoose === "p" && compPlayerChoose === "p") ||
    (firstPlayerChoose === "r" && compPlayerChoose === "r")
  ) {
    // console.log("You DRAW");

    showGame(firstPlayerChoose, compPlayerChoose);
  } else {
    console.log("You Lose");
    console.log("COMP WIN");
    player2Score += 1;
    isWin();
    showGame(firstPlayerChoose, compPlayerChoose);
  }

  // console.log("player1Score", player1Score);
  // console.log("player2Score", player2Score);
}

window.onkeydown = startGame;

// window.navigator.getBattery().then((data) => {
//   console.log(data);
// });
