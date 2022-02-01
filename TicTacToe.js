flag=0;
arr=[];
for(i=0;i<9;i++) arr[i]=i;

function move(button){
    console.log("andar");
    if(arr[button.id[1]-1]==button.id[1]-1){
         if(flag==0){
            button.value="0";
            arr[button.id[1]-1]=true;
            flag=1;
          }
          else {
            button.value="x";
            arr[button.id[1]-1]=false;
            flag=0;  
          }
   }
    
    const options={
    method:"POST",
    Headers:{"Content-Type":"application/json"},
    body:JSON.stringify({"name":"malav"})
    };
    fetch("/",options).then((response)=>{
        console.log(response.body);
    });
}

function reset(){
    buttonId="b";
    for(i=1;i<=9;i++) {
       button=document.getElementById(buttonId.concat(i));
       button.value="";
       arr[i-1]=i-1;
    }
}

function checkWinCondition(){
    div1=document.getElementById("body");   
    if(arr[0]==arr[1]&&arr[1]==arr[2]){
        (arr[0]==0? div1.innerHtml="GAME WIN BY PLAYER 1":div1.innerHtml="GAME WIN BY PLAYER 2");
        reset();
    }
    else if(arr[3]==arr[4]&&arr[4]==arr[5]){
       // (arr[3]==0? div.innerHtml="GAME WIN BY PLAYER 1":div.innerHtml="GAME WIN BY PLAYER 2");
        reset();
    }
    else if(arr[6]==arr[7]&&arr[7]==arr[8]){
       // (arr[6]==0? div.innerHtml="GAME WIN BY PLAYER 1":div.innerHtml="GAME WIN BY PLAYER 2");
        reset();
    }
    else if(arr[0]==arr[3]&&arr[3]==arr[6]){
       // (arr[0]==0? div.innerHtml="GAME WIN BY PLAYER 1":div.innerHtml="GAME WIN BY PLAYER 2");
        reset();
    }
    else if(arr[1]==arr[4]&&arr[4]==arr[7]){
       // (arr[1]==0? div.innerHtml="GAME WIN BY PLAYER 1":div.innerHtml="GAME WIN BY PLAYER 2");
        reset();
    }
    else if(arr[2]==arr[5]&&arr[5]==arr[8]){
        //(arr[2]==0? div.innerHtml="GAME WIN BY PLAYER 1":div.innerHtml="GAME WIN BY PLAYER 2");
        reset();
    }
    else if(arr[0]==arr[4]&&arr[4]==arr[8]){
        //(arr[0]==0? div.innerHtml="GAME WIN BY PLAYER 1":div.innerHtml="GaME WIN BY PLAYER 2");
        reset();
    }
    else if(arr[2]==arr[4]&&arr[4]==arr[6]){
        //(arr[2]==0? div.innerHtml="GAME WIN BY PLAYER 1":div.innerHtml="GAME WIN BY PLAYER 2");
        reset();
    }
    
}


function clickButton(button){
  console.log("hey there in the house");
  move(button); 
  checkWinCondition();
   
}







