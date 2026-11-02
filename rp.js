let userscore  =0 ;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");


const comprandomchoice = () => {
    const options = ["rock", "paper", "scissor"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];


}


choices.forEach((choice) =>{

    console.log(choice);
    choice.addEventListener("click", ()=>{
        let userchoice =choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    })
})


const playgame=(userchoice)=>{

    const compchoice = comprandomchoice();

    console.log(compchoice, userchoice);

    
}


