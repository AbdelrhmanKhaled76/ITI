function Shape() {
    if (new.target === Shape) {
        throw new Error("Shape is abstract.");
    }
}

Shape.prototype.Area = function () {
    throw new Error("Area must be implemented.");
};

Shape.prototype.Perimeter = function () {
    throw new Error("Perimeter must be implemented.");
};

function Rectangle(width, height) {
    if (this.constructor === Rectangle) {
        if (Rectangle.instance) {
            throw new Error("Only one Rectangle allowed.");
        }
        Rectangle.instance = this;
    }

    Shape.call(this);
    Rectangle.instance = this;

    let _width = width;
    let _height = height;

    Object.defineProperties(this, {
        width: {
            get() { return _width; },
            enumerable: false,
            configurable: false
        },
        height: {
            get() { return _height; },
            enumerable: false,
            configurable: false
        }
    });
}

Rectangle.instance = null;

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.Area = function () {
    return this.width * this.height;
};

Rectangle.prototype.Perimeter = function () {
    return 2 * (this.width + this.height);
};

Rectangle.prototype.toString = function () {
    return `Rectangle: ${this.width}x${this.height}, Area=${this.Area()}, Perimeter=${this.Perimeter()}`;
};

Rectangle.prototype.valueOf = function () {
    return this.Area();
};

function Square(length) {
    if (this.constructor === Square) {
        if (Square.instance) {
            throw new Error("Only one Square allowed.");
        }
        Square.instance = this;
    }

    Rectangle.call(this, length, length);
    Square.instance = this;
    Square.count++;
}

Square.instance = null;
Square.count = 0;

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.toString = function () {
    return `Square: ${this.width}x${this.height}, Area=${this.Area()}, Perimeter=${this.Perimeter()}`;
};


const r = new Rectangle(10, 6);
const s = new Square(5);

console.log(r + s);        // 60 + 25 = 85
console.log(r - s);        // 35
console.log(r.toString());
console.log(s.toString());
console.log(Square.count); // 1