function myLine() {
    let canv = document.getElementById('canv');
    canv.width = 500;
    canv.height = 500;
    let ctx = canv.getContext('2d');
    let x = 0;
    let y = 0;
    let interval = setInterval(() => {
        ctx.clearRect(0, 0, 500, 500);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "red";
        ctx.lineWidth = 5;
        ctx.stroke();
        x += 10;
        y += 10;
        if (x >= 510 && y >= 510) {
            clearInterval(interval);
            document.getElementById("finish").showModal();
        }
    }, 50);
}

