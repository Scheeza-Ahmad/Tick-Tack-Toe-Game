    let boxes = document.querySelectorAll(".box");
    let reset_btn = document.querySelector("#reset_btn");
    let playerO = true;
    
    let winningPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const checkWinner = () => {
        for (let pattern of winningPatterns) {
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
                if (pos1 === pos2 && pos2 === pos3) {
                    alert("The winner is: " + pos1);
                    disableAllBoxes();
                    return;
                }
            }
        }
    };

    const disableAllBoxes = () => {
        boxes.forEach((box) => {
            box.disabled = true;
        });
    };

    boxes.forEach((box) =>
        box.addEventListener("click", () => {
            if (playerO) {
                box.innerText = "O";
                playerO = false;
            } else {
                box.innerText = "X";
                playerO = true;
            }
            box.disabled = true;
            checkWinner();
        })
    );

    reset_btn.addEventListener("click", () => {
        boxes.forEach((box) => {
            box.innerText = "";
            box.disabled = false;
        });
        playerO = true;
    });