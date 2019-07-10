var winningArrays = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

var checkWinner = function (winningArrays) {
    winningArrays.forEach(function(array){
        if ((d[array[0]].innerText !== "") && (d[array[0]].innerText === d[array[1]].innerText) && (d[array[1]].innerText === d[array[2]].innerText)) {
            d[array[0]].classList.add('winner')
            d[array[1]].classList.add('winner')
            d[array[2]].classList.add('winner')
            gameOver = true;
        }
    })
    
}

var currentPlayer = "X";
var counter = 0;
var gameOver = false;
var playerOneScore = 0;
var playerTwoScore = 0;


var switchPlayers = function () {
    if (currentPlayer === "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
}
var playerTurn = function (event) {

    if (counter >= 9 || gameOver)  {
        return;  
    } else {
        if (event.target.innerHTML === ''){
            event.target.innerHTML = currentPlayer;
            counter ++;
            event.target.classList.add(currentPlayer);
            switchPlayers();
            checkWinner(winningArrays);
        } else {
            alert('click elsewhere')
        }
    } 
}
var d = document.querySelectorAll('.q');

d.forEach(function (box){
    box.addEventListener('click', playerTurn);
})

