class Bob{
    constructor(x, y, r){

        var options = {
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.x = x;
        this.y = y;
        this.r = r
        this.body = Bodies.circle(this.x, this.y, this.r, options);

        World.add(world, this.body)

    }
display() {

    var bobPos = this.body.position;

    ellipseMode(CENTER);
    fill(4, 1, 182);
    ellipse(bobPos.x, bobPos.y, this.r);

    }
}
