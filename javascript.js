const GameBorad=(function(){
    let count=0;
    const body=document.querySelector('body');
    const restart=function(){
        const restartButton=document.createElement('button');
        restartButton.classList.add("restart");
    restartButton.addEventListener('click',restartBoard);
    restartButton.textContent="restart";
    
  body.append(restartButton);
}
    const gameBoardConsole = Array.from({ length: 3 }, () => Array(3).fill(null));
    const resetBoard=function(){//function to reset borad
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                gameBoardConsole[i][j]=null;
                }    
    }}
    const addtile=(marker,x,y)=>{//recives coordinates and add marker to table
    if(gameBoardConsole[x][y]===null)
    {gameBoardConsole[x][y]=marker;}
    };
   /* const print=()=>{
     for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            console.log(gameboard[i][j]);
            }  
            console.log('')} }*/
    const gameboard=()=>{
        const container=document.createElement('container');
        for (let i = 0; i < 3; i++) {// rowN=I columnN=J
             const row=document.createElement('row');
             row.classList.add(i);
             container.append(row);
            for (let j = 0; j < 3; j++) {
               const item=document.createElement('div');
               item.classList.add(j);
              item.addEventListener('click',turn);
               row.append(item);
                }  
                }
                body.append(container);
                count=0;
    };   

   const oddOrEven=()=>{//takes the board and tells us whos turn is it
        count++
        if(count%2==0){
        return "O";}
        return "X";
        
   }
   
return{gameboard,oddOrEven,restart,addtile,resetBoard,gameBoardConsole};

})();
const changeNames=function(event){
    const body=document.querySelector('body');
       // Prevent the default form submission behavior
       event.preventDefault();
      const playerOneInput=document.querySelector('#One').value;
    const playerTwoInput=document.querySelector('#Two').value;
    if(playerOneInput!==""){
        //change player one name
        const playerOne=document.querySelector('#playerOne');
        playerOne.textContent=playerOneInput;
    }
    if(playerTwoInput!==""){
        //change player two name
        const playerTwo=document.querySelector('#playerTwo');
        playerTwo.textContent=playerTwoInput;
    }
}
const Players=function(){//how to add id later for now add the name getter
    
    const form=document.querySelector('#lol');
    form.addEventListener('submit',changeNames);
        }
       


const flow =(function(){//player one starts than player two untill winner
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
const turn =function(e){//cheacks whos turn this is
    const item=e.target;
    const body=document.querySelector('body');
    const text=document.querySelector('.text');
    const playerOne=document.querySelector('#playerOne');
    const playerTwo=document.querySelector('#playerTwo');
    console.log(text);
    if(item.textContent===""){
    item.textContent=GameBorad.oddOrEven();}
    GameBorad.addtile(item.textContent,item.className,item.closest('row').className);
    const winner=flow.winner(GameBorad.gameBoardConsole);
     if(winner!=="not done yet")//ig game ended
     {
        if(winner==="draw"&&text.textContent==="")//if game is draw
        {
        text.textContent="the game has ended in a draw";
        }
        else{//if game is deciceve
            if(text.textContent==="")
            {if(winner==='X')
                {if(playerOne.textContent!==''){
                    text.textContent='and the winner is '+playerOne.textContent;}
                else text.textContent='and the winner is X';
            }
                else {if(playerTwo.textContent!==''){
                    text.textContent='and the winner is '+playerTwo.textContent;}
                else text.textContent='and the winner is O';
                }
            }
        }
        body.append(text);
     }

} 
const restartBoard=function(e){
   const container=document.querySelector('container');
   const body=document.querySelector('body');
   const text=document.querySelector('.text');
   text.remove();
   container.remove();
   GameBorad.gameboard();

   const NewText=document.createElement('div');//new text
   NewText.classList.add('text');
   NewText.textContent='';
   body.append(NewText);
   GameBorad.resetBoard();
}

GameBorad.restart();
GameBorad.gameboard();
Players();
