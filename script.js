let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-button');
let newButton = document.querySelector('#newButton');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');

let turno = true;

let winPattens = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turno = true;
    enableBoxes();
    msgContainer.classList.add('hide');
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "o";
            box.style.color = "red";  // Different color for "o"
            turno = false;
        } else {
            box.innerText = "x";
            box.style.color = "blue";  // Different color for "x"
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.color = "black"; // Reset color
    }
};

const showwinner = (winner) => {
    msg.innerText = `Player ${winner} wins!`;
    msgContainer.classList.remove('hide');
    disableBoxes();
};

const checkwinner = () => {
    for (let pattern of winPattens) {
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                console.log("Winner is", p1);
                showwinner(p1);
                return;
            }
        }
    }

    // Draw condition
    let allFilled = [...boxes].every(box => box.innerText !== "");
    if (allFilled) {
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove('hide');
    }
};

resetBtn.addEventListener("click", resetGame);
newButton.addEventListener("click", resetGame);
