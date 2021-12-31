var score=0;
function Update_Score(){
    score = score+1;
    document.getElementById("score").innerHTML= score;
}
function Save_score(){
    localStorage.setItem("score",score);
    
}
function addUser(){
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);
    window.location="quiz.html";
}