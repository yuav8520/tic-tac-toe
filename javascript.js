const GameBorad=(function(){
    const size = 3; // Adjust the size as needed
    const gameboard = Array.from({ length: size }, () => Array(size).fill(null));
    const addtile=(marker,x,y)=>{
    if(gameboard[x][y]===null)
    {gameboard[x][y]=marker;}
    };
    const print=()=>{
     for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            console.log(gameboard[i][j]);
            }  
            console.log('')} }
return{addtile,print};

})();
const Player=function(name,marker){
   const returnMarker=()=>{
        return marker;}
    const returnName=()=>{
        return name;}    
            return{returnMarker,returnName};
        }();




const flow =(function(){//player one starts than player two untill winner
const counter=0;
const winner=(function (gameboard) {//recives an array and returns if winner draw or nothing
    let b=true;
  for (let i = 0; i < 3; i++) {//each row all j= 
     const marker=gameboard[i][0];
     if (marker!==null) {
        for (let j = 1; j <3; j++) {// i  is row j is column
            if(marker!==gameboard[i][j]) 
            {   b=false;
                break;
            }
          
        }
        if(b)//as long as b wasn't change to false;
        {return marker;}
        else b=true;
     }
  
  }
  for (let j = 0; j < 3; j++) {//each colum all i=
    const marker=gameboard[0][j]
    if (marker!==null) {
       for (let i = 1; i <3; i++) {// i is row j is column
           if(marker!==gameboard[i][j]) 
           {   b=false;
               break;
           }
         
       }
       if(b)//as long as b wasn't change to false;
       {return marker;}
       else b=true;
    }
}
   let marker=gameboard[0][0];//top to bottom diagonal
    if(marker===gameboard[1][1]&&marker===gameboard[2][2]&&marker!==null)
 {return marker;}
 marker=gameboard[2][0];//bottom to to diagonal
 if(marker===gameboard[1][1]&&marker===gameboard[0][2]&&marker!==null)
{return marker;
}
//check if borad full for draw
b=true;
 for (let i = 0; i < 3; i++) {//each row all j=
        for (let j = 0; j <3; j++) {// i  is row j is column
            if(null===gameboard[i][j]) 
            {   b=false;
            }}}
if (b) return "draw";
return "not done yet";
 }
)

return{winner};
})();
//console.log(Players.PlayerOne)
