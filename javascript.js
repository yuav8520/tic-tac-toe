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
const Players=(function(){
const PlayerOne=() => "X";
const PlayerTwo=() => "O";
return{PlayerOne,PlayerTwo};
})();

const flow =(function(){


})()
//console.log(Players.PlayerOne)
