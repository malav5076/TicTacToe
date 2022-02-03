flag=0;
grid=[];
gridFillCount=0;
resultNotDeclared=true;
for(i=0;i<9;i++) grid[i]=-1;

function move(cell){
    document.getElementById("divId").innerHTML="";
    gridFillCount++;
         if(flag==0){
            cell.value="0";
            grid[cell.id[1]-1]=0;
            flag=1;
          }
          else {
            cell.value="x";
            grid[cell.id[1]-1]=1;
            flag=0;  
          }
}

function reset(){
    gridFillCount=0;
    cellId="b";
    for(i=1;i<=9;i++) {
       cell=document.getElementById(cellId.concat(i));
       cell.value="";
       grid[i-1]=-1;
    }
}

function checkWinCondition(){
    
    
    resultText=document.getElementById("divId");  
    if(gridFillCount==9){
        resultText.innerHTML="THE GAME IS TIE";
        resultNotDeclared=false;
    }
    if(grid[0]==grid[1]&&grid[1]==grid[2]&&(grid[2]==0||grid[2]==1)){
        (grid[0]==0? resultText.innerHTML="GAME WON BY PLAYER 1":resultText.innerHTML="GAME WON BY PLAYER 2");
        resultNotDeclared=false;
    }
    else if(grid[3]==grid[4]&&grid[4]==grid[5]&&(grid[5]==0||grid[5]==1)){
        (grid[3]==0? resultText.innerHTML="GAME WON BY PLAYER 1":resultText.innerHTML="GAME WON BY PLAYER 2");
        resultNotDeclared=false;
    }
    else if(grid[6]==grid[7]&&grid[7]==grid[8]&&(grid[7]==0||grid[7]==1)){
        (grid[6]==0? resultText.innerHTML="GAME WON BY PLAYER 1":resultText.innerHTML="GAME WON BY PLAYER 2");
        resultNotDeclared=false;
    }
    else if(grid[0]==grid[3]&&grid[3]==grid[6]&&(grid[6]==0||grid[6]==1)){
        (grid[0]==0? resultText.innerHTML="GAME WON BY PLAYER 1":resultText.innerHTML="GAME WON BY PLAYER 2");
        resultNotDeclared=false;
    }
    else if(grid[1]==grid[4]&&grid[4]==grid[7]&&(grid[7]==0||grid[7]==1)){
        (grid[1]==0? resultText.innerHTML="GAME WON BY PLAYER 1":resultText.innerHTML="GAME WON BY PLAYER 2");
        resultNotDeclared=false;
    }
    else if(grid[2]==grid[5]&&grid[5]==grid[8]&&(grid[8]==0||grid[8]==1)){
        (grid[2]==0? resultText.innerHTML="GAME WON BY PLAYER 1":resultText.innerHTML="GAME WON BY PLAYER 2");
        resultNotDeclared=false;
    }
    else if(grid[0]==grid[4]&&grid[4]==grid[8]&&(grid[8]==0||grid[8]==1)){
        (grid[0]==0? resultText.innerHTML="GAME WON BY PLAYER 1":resultText.innerHTML="GaME WON BY PLAYER 2");
        resultNotDeclared=false;
    }
    else if(grid[2]==grid[4]&&grid[4]==grid[6]&&(grid[6]==0||grid[6]==1)){
        (grid[2]==0? resultText.innerHTML="GAME WON BY PLAYER 1":resultText.innerHTML="GAME WON BY PLAYER 2");
        resultNotDeclared=false;
    }
    
}


function clickCell(cell){
  if(resultNotDeclared){
  move(cell); 
  checkWinCondition();
  }
}







