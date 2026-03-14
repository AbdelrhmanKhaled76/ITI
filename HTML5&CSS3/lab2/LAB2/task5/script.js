
    var canvas = document.getElementById('canvas');

        let context = canvas.getContext('2d');
        let grd1 = context.createLinearGradient(250, 50, 450, 400);
        grd1.addColorStop(0, "blue");
        grd1.addColorStop(1, "white");

        var grd2 = context.createLinearGradient(420, 400, 50, 50);
        grd2.addColorStop(0, "blue");
        grd2.addColorStop(1, "white");

        context.beginPath();
        context.arc(250,250,200,0,2*Math.PI)
        context.fillStyle = grd1;
        context.fill();
        context.closePath();

        context.beginPath();
        context.arc(250,250,170,0,2*Math.PI)
        context.fillStyle = grd2;
        context.fill();
        context.closePath();

        context.beginPath()
        context.font = "340px Arial";
        context.fillStyle = 'white'
        context.fillText("M", 108, 370);
        context.closePath();
