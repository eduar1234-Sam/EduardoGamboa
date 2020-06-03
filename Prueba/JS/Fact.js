var num = 5;
var num1= 4; 
var num3= 3;
var num4= 2;
var num5= 1;
var num6= 0; 

console.log("0!= "+factorial(num6));
console.log("1!= "+factorial(num5));
console.log("2!= "+factorial(num4));
console.log("3!= "+factorial(num3));
console.log("2!= "+factorial(num1));
console.log("5!= "+factorial(num));

function factorial(numb){
var exit=1;
for (i=1; i<=numb; i++) {
	exit = exit * i; 
	}


return exit;
  }
