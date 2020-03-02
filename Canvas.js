let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let left = document.getElementById("left");
let right = document.getElementById("right");
var randomshape = Math.floor((Math.random() * 3) + 1);
deltaX = 0;
deltaY = 0;

function draw() {

    if (randomshape == 1) {

        ctx.beginPath();
        ctx.rect(75, 25, 200, 100);
        ctx.stroke();

    }
    else if (randomshape == 2) {

        ctx.beginPath();
        ctx.rect(70, 25, 150, 100);
        ctx.stroke();
    }
    else if (randomshape == 3) {

        ctx.beginPath();
        ctx.rect(75, 25, 100, 100);
        ctx.stroke();

    }
    document.getElementById("draw").disabled = true;

}

function movement(id) {



    if (left.id == id) {

        deltaX -= 2;
        if (randomshape == 1) {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.rect(75 + deltaX, 25, 200, 100);
            ctx.stroke();
        }
        else if (randomshape == 2) {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.rect(70 + deltaX, 25, 150, 100)
            ctx.stroke();

        }
        else if (randomshape == 3) {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.rect(75 + deltaX, 25, 100, 100)
            ctx.stroke();

        }

    }

    if (right.id == id) {

        deltaX += 2;
        if (randomshape == 1) {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.rect(75 + deltaX, 25, 200, 100);
            ctx.stroke();
        }
        else if (randomshape == 2) {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.rect(70 + deltaX, 25, 150, 100)
            ctx.stroke();

        }
        else if (randomshape == 3) {

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.rect(75 + deltaX, 25, 100, 100)
            ctx.stroke();

        }

    }

}

function deleted() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    window.location.reload();
    document.getElementById("draw").disabled = false;

}
