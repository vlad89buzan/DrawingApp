const canvas = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let sizeEl = document.getElementById("size");
  let size = +sizeEl.textContent;
  let prev = document.querySelector("#decrease");
  let next = document.querySelector("#increase");
  let clear = document.getElementById("clear");
  let colorEl = document.getElementById("color");
  let color = colorEl.value;

  let x;
  let y;
  let isPressed = false;

  canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
  });
  canvas.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
  });
  canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
      const x2 = e.offsetX;
      const y2 = e.offsetY;
      drawCircle(x2, y2);
      drawLine(x, y, x2, y2);
      x = x2;
      y = y2;
    }
  });
  function controls() {
    prev.addEventListener("click", () => {
      if (size > 1) {
        size--;
        sizeEl.textContent = size;
        console.log(size);
      }
    });
    next.addEventListener("click", () => {
      if (size < 40) {
        size++;
        sizeEl.textContent = size;
        console.log(size);
      }
    });
    colorEl.addEventListener("change", () => {
      color = colorEl.value;
    });
    clear.addEventListener("click", () => {
      window.location.reload();
    });
  }
  function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
  }
  controls();
};
export default canvas;
