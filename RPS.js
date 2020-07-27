let userscore=0;
let aiscore=0;
const userscore_span=document.getElementById("userscore");
const aiscore_span=document.getElementById("AI-score");
const scoreboard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");



function getAiChoice(){
	choice=["r","p","s"];
	const random= Math.floor(Math.random() * 3);
	return choice[random];    
}


function converttoword(letter){
	if (letter==="r") return "ROCK";
	if (letter==="p") return "PAPER";
	if (letter==="s") return "scissors";
}


function win(user,Ai){
	userscore++;
	userscore_span.innerHTML=userscore;
	aiscore_span.innerHTML=aiscore;
	const smalluser="ME".fontsize(2).sub();
	const smallai="AI".fontsize(2).sub();
    result_p.innerHTML=`${converttoword(user)}${(smalluser)}  beats  ${converttoword(Ai)}${(smallai)}  .You WIN`;
	
}

function lost(user,Ai){
	aiscore++;
	userscore_span.innerHTML=userscore;
	aiscore_span.innerHTML=aiscore;
	const smalluser="Me".fontsize(2).sub();
	const smallai="AI".fontsize(2).sub();
    result_p.innerHTML=`${converttoword(user)}${(smalluser)}  looses to ${converttoword(Ai)}${(smallai)}  .You LOST!!`;
	
	
}

function draw(user,Ai){
	userscore_span.innerHTML=userscore;
	aiscore_span.innerHTML=aiscore;
	const smalluser="Me".fontsize(2).sub();
	const smallai="AI".fontsize(2).sub();
    result_p.innerHTML="Its a DRAW";
	
	
}

function game(userchoice){
	const AiChoice= getAiChoice();
	switch(userchoice + AiChoice){
		case "rs":
		case "pr":
		case "sp":
		  win(userchoice,AiChoice);
		  break;
		case "rp":
		case "pr":
		case "sr":
		  lost(userchoice,AiChoice);
		  break;
		case "rr":
		case "pp":
		case "ss":
		  draw(userchoice,AiChoice);
		  break;    
	}
	
}


function main(){
    rock_div.addEventListener('click',function(){
      game("r");
    })

    paper_div.addEventListener('click',function(){
      game("p");
    })
    scissors_div.addEventListener('click',function(){
      game("s");
    })
}

main();