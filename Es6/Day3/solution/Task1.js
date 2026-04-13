class Polygon {
    constructor(width, height){
        this._width = width;
        this._height = height
    }
    get width(){
        return this._width;
    }
    set width(width){
        this._width = width;
    }

    get height(){
        return this._height;
    }

    set height(height){
        this._height = height;
    }

    toString(){
        console.log(`area of the shape is : ${this._width * this._height}`);
    }
}


class Rectangle extends Polygon{
    constructor(width, height){
        super(width,height);
    }

    toString(){
        console.log(`area of the rectangle is :  ${this._width * this._height}`);
    }
}

class Square extends Polygon{
    constructor(width){
        super(width,width);
    }

    toString(){
        console.log(`area of the square is :  ${this._width * this._height}`);
    }
}

class Triangle extends Polygon{
    constructor(height, base){
        super(height, base);
    }

    toString(){
        console.log(`area of the triangle is :  ${this._width * this._height * 0.5}`);
    }
}

class Circle extends Polygon{
    constructor(radius){
        super(radius, radius);
    }
    toString(){
        console.log(`area of the circle is :  ${Math.PI * this._width * this._height}`);
    }
}

const rec = new Rectangle(1,2);
rec.toString();