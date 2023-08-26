let number1 = Math.random();
number1 = Math.floor(number1*6)+1;
// console.log(number1);
let diceimg1 = "dice"+number1+".png"
// console.log(diceimg1);


let number2 = Math.random();
number2 = Math.floor(number2*6)+1;
let diceimg2 = "dice"+number2+".png";

let player = document.getElementsByClassName("dice");
console.log(player);
player[0].lastElementChild.setAttribute("src","./images/"+diceimg1)
player[1].lastElementChild.setAttribute("src","./images/"+diceimg2)

let h1 = document.querySelector("h1");
// console.log(h1);

if(number1>number2){
    h1.innerHTML = "🏆 Player 1 WON";
    h1.style.fontSize="5rem"
}
else if(number1===number2){
    h1.innerHTML = "🏳️ It's a draw 🏳️";
    h1.style.fontSize="5rem"
}
else{
    h1.innerHTML = "Player 2 WON 🏆";
    h1.style.fontSize="5rem";
}

