var restart = document.getElementById("btn");
var squares = document.querySelectorAll("td");
var i,j;
confirm("Press a button!");

restart.addEventListener("click", function () {
    for (i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
});

for(var i = 0; i< squares.length; i++){
	squares[i].addEventListener("click",function(){
		if (i%2 === 0){
			this.textContent = 'O'
			i = i + 1
		}else if (i%2 !== 0){
			this.textContent = 'X'
			i = i + 1
		}
		if(squares[0].textContent === squares[1].textContent && squares[0].textContent === squares[2].textContent && squares[1].textContent === squares[2].textContent && squares[0].textContent !== ''){
			alert(squares[0].textContent+' -> won');
		}else if(squares[3].textContent === squares[4].textContent && squares[3].textContent === squares[5].textContent && squares[4].textContent === squares[5].textContent && squares[3].textContent !== ''){
			alert(squares[3].textContent+' -> won');
		}else if(squares[6].textContent === squares[7].textContent && squares[6].textContent === squares[8].textContent && squares[7].textContent === squares[8].textContent && squares[6].textContent !== ''){
			alert(squares[6].textContent+' -> won');
		}else if(squares[0].textContent === squares[3].textContent && squares[0].textContent === squares[6].textContent && squares[3].textContent === squares[6].textContent && squares[0].textContent !== ''){
			alert(squares[0].textContent+' -> won');
		}else if(squares[1].textContent === squares[4].textContent && squares[1].textContent === squares[7].textContent && squares[4].textContent === squares[7].textContent && squares[1].textContent !== ''){
			alert(squares[1].textContent+' -> won');
		}else if(squares[2].textContent === squares[5].textContent && squares[2].textContent === squares[8].textContent && squares[5].textContent === squares[8].textContent && squares[2].textContent !== ''){
			alert(squares[2].textContent+' -> won');
		}else if(squares[0].textContent === squares[4].textContent && squares[0].textContent === squares[8].textContent && squares[4].textContent === squares[8].textContent && squares[0].textContent !== ''){
			alert(squares[0].textContent+' -> won');
		}else if(squares[2].textContent === squares[4].textContent && squares[2].textContent === squares[6].textContent && squares[4].textContent === squares[6].textContent && squares[2].textContent !== ''){
			alert(squares[2].textContent+' -> won');
		}else if(squares[0].textContent !== '' && squares[1].textContent !== '' && squares[2].textContent !== '' && squares[3].textContent !== '' && squares[4].textContent !== '' && squares[5].textContent !== '' && squares[6].textContent !== '' && squares[7].textContent !== '' && squares[8].textContent !== ''){
			alert("Game is Draw!!!");
		}
	});
}
