class Point
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }
    
    drawPoint(ctx){
        ctx.beginPath();
        console.log(this.x, this.y)
        ctx.fillRect(this.x , this.y , 4 , 4);
        ctx.fillStyle = "black";
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = 'black'
        ctx.stroke();
        
        
    }
}