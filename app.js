let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let win = document.querySelector(".win");
let cont2 = document.querySelector(".cont2");
let final = document.querySelector(".final");

let turn0 = true;

let count = 0;

const countClick = () => {
    boxes.forEach((box) => {
        box.addEventListener("click",() => {
            count = count + 1;
            if(count == 9){
                console.log("finish");
            }
        });

    })

}




let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();


}

const newGame = () => {
    turn0 = true;
    enableBoxes();

boxes.forEach((box) => {
        box.style.backgroundColor = "rgb(222, 184, 135)";
    
        })   

}

// const res = () => {
    
// }

const enableBoxes = () => {
    for( let box of boxes){
        box.disabled = false;
        
        box.innerText = "";
        
        
        cont2.classList.add("hide");


    }
}




boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if(turn0){
            box.innerText ='0' ;
            turn0 = false;
        }
        else{
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
        countClick();
    })
})


const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){ 
                boxes[pattern[0]].classList.add("bg");
                boxes[pattern[1]].classList.add("bg");
                boxes[pattern[2]].classList.add("bg");
                winner(pos1);
            
            }
        }
    }
}

const disableBoxes = () => {
    for( let box of boxes){
        box.disabled = true;
    }
}

const winner = (winner) => {  
    final.innerText = `Congratulation, winner is ${winner}`;
    cont2.classList.remove("hide");
    disableBoxes();
}




resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", newGame);


