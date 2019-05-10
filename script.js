var restart = document.getElementById("btn");
var squares = document.querySelectorAll("td");
var i;
restart.addEventListener("click", function () {
    for (i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
});

function changeChar(){
    if (this.textContent === ''){
        this.textContent = 'X'
    }else if(this.textContent === 'X'){
        this.textContent = 'O'
    }else{
        this.textContent = ''
    }
}

for(var i = 0; i< squares.length; i++){
    squares[i].addEventListener("click",changeChar);
}