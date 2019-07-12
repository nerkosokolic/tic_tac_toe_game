var message = document.querySelector('.message');
var winningArrays = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

var checkWinner = function (winningArrays) {
    winningArrays.forEach(function(array){
        if ((d[array[0]].innerText !== "") && (d[array[0]].innerText === d[array[1]].innerText) && (d[array[1]].innerText === d[array[2]].innerText)) {
            array.forEach(function(i){
                d[i].classList.add('winner')
            })
            winSound.play();
            gameOver = true;
            if (d[array[0]].innerText === 'X') {
                playerOneScore ++;
            } else {
                playerTwoScore ++;
            }

            if (playerOneScore + playerTwoScore === 1) {
                firstSound.play()
            }
            document.querySelector('.p1-score').innerText = playerOneScore;
            document.querySelector('.p2-score').innerText = playerTwoScore;
            setTimeout(function (){
                newRound();
            },3000)
    }
})
}

var marker = "X";
var counter = 0;
var gameOver = false;
var playerOneScore = 0;
var playerTwoScore = 0;

var newRound = function () {
    d.forEach(function(box){
        box.innerText = '';
        gameOver = false;
        counter = 0;
        box.classList.remove('winner')
    })
}

var switchPlayers = function () {
    if (marker === "X") {
        marker = "O"
    } else {
        marker = "X"
    }
}
var playerTurn = function (event) {
    if (gameOver)  {
        return;  
    } else {
        if (event.target.innerHTML === ''){
            event.target.innerHTML = marker;
            if (counter === 8) {
                setTimeout(function(){
                    newRound();
                },3000) 
            }
            clickSound.play(); 
            counter ++;
            checkWinner(winningArrays);
            switchPlayers();
        }
    } 
}
var d = document.querySelectorAll('.cube');

d.forEach(function (box){
    box.addEventListener('click', playerTurn);
})

var clickSound = document.getElementById("clickSound") 
var winSound = document.getElementById('winSound')
var firstSound = document.getElementById('firstBlood');

var playerOneName = ""
var playerTwoName = ""

var assignNames = function () {
    playerOneName = "[X] " + document.querySelector('#p1name').value
    playerTwoName = "[O] " + document.querySelector('#p2name').value
    document.querySelector('.p1-name').innerText = playerOneName;
    document.querySelector('.p2-name').innerText = playerTwoName;
}
// Modal section 
var modal = document.getElementById("myModal");
var span = document.getElementById("start-button");
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    document.querySelector('#myModal').classList.add('scale-out-ver-bottom');
    assignNames();
    setTimeout(function(){
        modal.style.display = "none";
    }, 2000);
}

function opening() {
    modal.style.display = "block";
}
var cModal = document.getElementById("myConsole");
// var span = document.getElementById("start-button");

function consoleModal() {
    cModal.style.display = "block";
}
var consoleInput = document.getElementById('console-input');
var consoleText = document.querySelector('.console-text');
var newBr = document.createElement('br');
var newDiv = document.createElement('div');
var txt = document.createTextNode('new information here the end')
var i = 0;
var interval = setTimeout( function () {},1500)

consoleInput.addEventListener('keyup', function (event){
    if (event.keyCode === 13) {
        event.preventDefault();
        if (consoleInput.value === 'justMessingWithYouAll()') {
            cModal.style.display = "none";
            opening();
        } else if (consoleInput.value === 'startGame()') {
            consoleText.innerHTML += '<br> Starting new game...'
                consoleText.innerHTML += '<br> ...'
                setTimeout(function(){
                    consoleText.innerHTML += '<br> ...Ready!'
                },2000);
                consoleText.innerHTML += '<br> ...'
                consoleInput.value = "";
                setTimeout(function(){
                    consoleText.innerHTML += '<br> Welcome player X'
                    consoleText.innerHTML += '<br>'
                    consoleText.innerHTML += '<br> Type H1-3 '
                    consoleText.innerHTML += '<br>___________________'
                    consoleText.innerHTML += '<br>'
                    consoleText.innerHTML += '<br> | - -| - - -| - - |'
                    consoleText.innerHTML += '<br>'
                    consoleText.innerHTML += '<br> | - -| - - -| - - |'
                    consoleText.innerHTML += '<br>'
                    consoleText.innerHTML += '<br> | - -| - - -| - - |'
                    consoleText.innerHTML += '<br>'
                    consoleText.innerHTML += '<br> | - -| - - -| - - |'
                    consoleText.innerHTML += '<br>'
                    consoleText.innerHTML += '<br> | - -| - - -| - - |'
                    consoleText.innerHTML += '<br>___________________'
                    consoleText.innerHTML += '<br>'
                    consoleText.innerHTML += '<br> Type V1-3 '
                    consoleText.innerHTML += "<br>type in your coorindates -  <span class='color'>meaningfulVariableNameToPlotCoordinates(H#,V#)</span>"
                },2000);
        }
        else if (consoleInput.value === 'meaningfulVariableNameToPlotCoordinates(H1,V1)'){
            consoleInput.value = "";
            consoleText.innerHTML += '<br> ...'
            setTimeout(function(){
                consoleText.innerHTML += '<br> ...'
                    consoleText.innerHTML += '<br>___________________'
                    consoleText.innerHTML += '<br>'
                    consoleText.innerHTML += '<br> |   X  | - - -| - - |'
                    consoleText.innerHTML += '<br>'
                    consoleText.innerHTML += '<br> | - -| - - -| - - |'
                    consoleText.innerHTML += '<br>'
                    consoleText.innerHTML += '<br> | - -| - - -| - - |'
                    consoleText.innerHTML += '<br>'
                    consoleText.innerHTML += '<br> | - -| - - -| - - |'
                    consoleText.innerHTML += '<br>'
                    consoleText.innerHTML += '<br> | - -| - - -| - - |'
                    consoleText.innerHTML += '<br>___________________'
            },2000);
        }
        }
}
)


window.onload = consoleModal()