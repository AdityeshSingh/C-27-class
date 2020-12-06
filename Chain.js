class Chain {
constructor(bodyA,bodyB){
var options = {
    bodyA:bodyA,
    bodyB:bodyB,
    stifness:0.004,
length:10
}
this.chain = Constraint.create(options);
world.add = (world,this.chain);
}
 display(){
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;
strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y);
 }
}