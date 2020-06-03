

var arr= [2, 3, 4, 6];
var arr2= [123, 67, 890, 4]
var arr3= [2, 3, 7, 9, 4, 5, 6, 9, 12]


console.log("First array "+multiplicar(arr));
console.log("Second array "+multiplicar(arr2));
console.log("Third array "+multiplicar(arr3));





function multiplicar( arr){
   resul=[];
  var a;
  var b=0;
  for(const ite in arr){
    var a;
    //console.log("iteracion "+ arr[ite]);
  for(const ite2 in arr){
    //console.log("iteracion "+ arr[ite2]);
    if(arr[ite]!==arr[ite2]){
    
      a=parseFloat(arr[ite]*arr[ite2]);
      b+=a

    

    }
      
      resul[ite] =b;
      

      


  }

}
   return resul;
}


