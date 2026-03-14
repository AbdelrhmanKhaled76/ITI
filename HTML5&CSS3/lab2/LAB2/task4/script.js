
    let canvas = document.getElementById('canv');
    if (canvas.getContext)
    {

        let context = canvas.getContext('2d');

        let grd1 = context.createLinearGradient(200, 100, 200, 250);
        grd1.addColorStop(0, "#4a90e2");
        grd1.addColorStop(1, "white");

        let grd2 = context.createLinearGradient(250, 250, 250, 400);
        grd2.addColorStop(0, "lightgreen");
        grd2.addColorStop(1, "white");

        let grd3 = context.createLinearGradient(250, 200, 250, 400);
        grd3.addColorStop(0, "black");
        grd3.addColorStop(1, "white");

        context.beginPath();
        context.moveTo(10,100);
        context.lineTo(450,100);
        context.lineTo(450,250);
        context.lineTo(10,250);
        context.lineTo(10,150);
        context.fillStyle = grd1;
        context.fill();
        context.closePath();

        context.beginPath();
        context.moveTo(10,250);
        context.lineTo(450,250);
        context.lineTo(450,400);
        context.lineTo(10,400);
        context.lineTo(10,300);
        context.fillStyle = grd2;
        context.fill();
        context.closePath();

        context.beginPath();
        context.moveTo(100,300);
        context.lineTo(100,200);
        context.lineTo(320,200);
        context.lineTo(320,300);
        context.strokeStyle = grd3;
        context.lineWidth = 3;
        context.stroke();
        context.closePath();
    }