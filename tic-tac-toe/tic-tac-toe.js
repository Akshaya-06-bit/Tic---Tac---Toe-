let win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
let count = 0;
let turn0 = true;
let hide = document.querySelector("#msg-wrapper");
let boxes = document.querySelectorAll(".box");
let msgcon = document.querySelector(".msg-container");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new");
let msg = document.querySelector("#msg");
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        {
            box.innerText = "O";
            turn0=false;
        }
        else
        {
            box.innerText = "X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let winner = checkWinner();
        if(count===9 && !winner)
        {
            gamedraw();
        }

    });
});
let checkWinner = ()=>{
    for(let pattern of win)
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != "" )
        {
            if(pos1val===pos2val && pos2val===pos3val)
            {
                showWinner(pos1val);
                return true;
            }
        }
    }
};
const showWinner = (winner)=>{
    msg.innerText=`Congratulation..!!! Winner is player ${winner}`;
    hide.classList.remove("hide");
    disable();
};
const disable = ()=>{
    for(let box of boxes)
    {
    box.disabled = true; 
    }
};
const enable = ()=>{
    for(let box of boxes){
    box.disabled = false; 
    box.innerText = "";
    }
};
const resetgame = ()=>{
    turn0 = true;
    count =0;
    hide.classList.add("hide");
    enable();
};
const gamedraw = ()=>{
    msg.innerText = `Game is draw`;
    hide.classList.remove("hide");
    disable();
};
reset.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);