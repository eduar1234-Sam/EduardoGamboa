class Main {
   

  public static void main(String[] args) {
    int repeat = 1;
   int rep = 0;
   int [] myArray = {1,2,2,5,4,6,7,8,8,8};
   int num=0;
    for(int i=1; i<9; i++){
      if(myArray [i] == myArray [i+1]){
        repeat = repeat + 1;
      }else{
        if (repeat > rep){
          rep = repeat;
          num = myArray [i];
        }
        repeat = 1;
      }
      if(repeat > rep){
        rep = repeat;
         num =  myArray [i];
      }
    }
    System.out.println("Número "+num);
    System.out.println("Ocurrencias " + rep);

  }
}