
window.onload = function(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    let point1 = 0;
    let point2 = 0;

    const scores = document.getElementById('score');
    let score1 = scores.appendChild(document.createElement('h2'));
    score1.innerHTML = point1;
    let score2 = scores.appendChild(document.createElement('h2'));
    score2.innerHTML = point2;
    


   

    let t = Date.now();
    let x = 250;
    let y = 200;
    let xSpeed = 100;
    let ySpeed = 100;
    let xDir = 1;
    let yDir = 1;
    



    
    function draw(){
        let timePassed = (Date.now() - t)/ 1000;
        t = Date.now();
        let fps = Math.floor(1/timePassed);

        context.clearRect(0, 0, 500, 400);

        context.beginPath();
        context.font = '12px Arial';
        context.fillStyle = 'beige';
        context.fillText('FPS: ' + fps, 10, 20);

        context.beginPath();
        context.rect(x, y, 5, 5);
        context.fillStyle = 'white';
        context.fill();

        context.beginPath();
        context.moveTo(250, 25);
        context.lineTo(250, 375);
        context.strokeStyle = 'beige';
        context.stroke();

            x += xDir * (xSpeed * timePassed);
            y += yDir * (xSpeed * timePassed);

        if(x <= 0){
            xDir = 1;
            ++point1;
            score1.innerHTML = point1;
        }
        
        if(x >= (500 - 5)){
            xDir = -1;
            
            ++point2;
            score2.innerHTML = point2;
        }

        if(y <= 0){
            yDir = 1;
            
        }
        
        if(y >= (400 - 5)){
            yDir = -1;
            
        }

        
        
        window.requestAnimationFrame(draw);

    }

    
    draw();
}
