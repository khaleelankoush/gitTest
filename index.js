const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decreas");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getelementByld("clear");

const ctx = canvas.getcontext("2d");

let size = 10;
let ispressed = false;
colorEl.value = "black";
let color = color.value;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
    ispressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

document.addEventListener("mouseup", (e) => {
    ispressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemov", (e) => {
    if (ispressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircel(x2, y2)
        drawline(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

function drawCircel(x, y) {
    ctx.beginpath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillstyle = color;
    ctx.fill();
}

function drawline(x1, y1, x2, y2) {
    ctx.beginpath();
    ctx.moveTO(x1, y1);
    ctx.lineTO(x2, x1);
    ctx.strokestyle = color;
    ctx.linewidth = size * 2;
    ctx.stroke();
}
function updateSizeOnScreen() {
    sizeEl.innerText = size;
}
increaseBtn.addEventListener("click", () => {
    size += 5;
    if (size > 50); {
        size = 50;
    }
    updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", () => {
    size -= 5;
    if (size < 5) {
        size = 5
    }
    updateSizeOnScreen();
});

colorEl.addEventListener("chang", (e) => (color = e.target.value));
clearEl.addEventListener("click", () =>
    ctx.clearRect(0, 0, canvas.width, canvas.height)
);