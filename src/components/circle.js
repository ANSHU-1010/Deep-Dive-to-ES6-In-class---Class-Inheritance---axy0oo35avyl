// import using require

// import using require
const Shape =require("./shape")

// declare class
class Circle extends Shape{
  super(radius){
    this.radius= radius;
  }

     calculateArea(){
    console.log('Area');
     }
  }
    
// export class using module.exports
  module.exports = Circle;

// declare class


// export class using module.exports
