
var show = "";
var calculation = 0;
var expression = "";

function displayNum(num){
     document.getElementById('display').value = show + num;
     show = document.getElementById('display').value;
	 expression += num;
}

function operator(operation){
	if (operation == "c"){
		calculation = 0;
		document.getElementById('display').value = calculation;
		expression = "";
	} 
	else if (operation =="ce"){
		expression = expression.slice(0,-1);
	}
	else {
		expression += operation;
	}
	show="";
}

function calc(operation){
	expression = "(" + expression + ")";
	calculation = eval(expression);
	document.getElementById('display').value = calculation;
}