#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>
#include <memory>
#include <iomanip>

using namespace std;

class GeoShape
{
public:
    virtual ~GeoShape() = default;
    virtual double area() const = 0;
    virtual double perimeter() const = 0;
    virtual void print(ostream &os) const
    {
        os << "GeoShape (abstract)";
    }

    bool operator<(const GeoShape &other) const
    {
        return this->area() < other.area();
    }
};

inline ostream &operator<<(ostream &os, const GeoShape &s)
{
    s.print(os);
    return os;
}


class Circle : public GeoShape
{
private:
    double r;

public:
    Circle(double radius) : r(radius) {}
    Circle& operator=(const Circle& other)
    {
        if (this != &other) {
            this->r = other.r;
        }
        return *this;
    }
    double area() const override { return M_PI * r * r; }
    double perimeter() const override { return 2 * M_PI * r; }

    void print(ostream &os) const override
    {
        os << "Circle(radius=" << r
           << ", area=" << area()
           << ", perimeter=" << perimeter() << ")";
    }
};

class Triangle : public GeoShape
{
private:
    double a, b, c;

public:
    Triangle(double A, double B, double C) : a(A), b(B), c(C) {}
    Triangle& operator=(const Triangle& other)
    {
        if (this != &other) {
            this->a = other.a;
            this->b = other.b;
            this->c = other.c;
        }
    return *this;
    }

    
    double perimeter() const override { return a + b + c; }

    double area() const override
    {
        double s = perimeter() / 2.0;
        return sqrt(s * (s - a) * (s - b) * (s - c));
    }

    void print(ostream &os) const override
    {
        os << "Triangle(" << a << "," << b << "," << c
           << ", area=" << area() << ")";
    }
};

class Rhombus : public GeoShape
{
private:
    double d1, d2;

public:
    Rhombus(double D1, double D2) : d1(D1), d2(D2) {}

    Rhombus& operator=(const Rhombus& other)
    {
        if (this != &other) {
            this->d1 = other.d1;
            this->d2 = other.d2;
        }
        return *this;   
    }


    double area() const override { return (d1 * d2) / 2.0; }

    double perimeter() const override
    {
        double side = sqrt((d1/2)*(d1/2) + (d2/2)*(d2/2));
        return 4 * side;
    }

    void print(ostream &os) const override
    {
        os << "Rhombus(d1=" << d1 << ", d2=" << d2
           << ", area=" << area() << ")";
    }
};

class Rectangle : public GeoShape
{
protected:
    double width, height;

public:
    Rectangle(double w, double h) : width(w), height(h) {}
    Rectangle& operator=(const Rectangle& other)
    {
        if (this != &other) {
            this->width = other.width;
            this->height = other.height;
        }
        return *this;
    }


    double area() const override { return width * height; }
    double perimeter() const override { return 2 * (width + height); }

    void print(ostream &os) const override
    {
        os << "Rectangle(width=" << width
           << ", height=" << height
           << ", area=" << area() << ")";
    }
};

class Square : public Rectangle
{
public:
    Square(double side) : Rectangle(side, side) {}
    Square& operator=(const Square& other)
    {
        if (this != &other) {
            Rectangle::operator=(other); // call base copy
        }
        return *this;
    }


    void print(ostream &os) const override
    {
        os << "Square(side=" << width
           << ", area=" << area() << ")";
    }
};

class Cube : public Square
{
public:
    Cube(double side) : Square(side) {}
    Cube& operator=(const Cube& other)
    {
        if (this != &other) {
            Square::operator=(other);
        }
        return *this;
    }


    double area() const override { return 6 * width * width; }
    double perimeter() const override { return 12 * width; }
    double volume() const { return width * width * width; }

    void print(ostream &os) const override
    {
        os << "Cube(side=" << width
           << ", surfaceArea=" << area()
           << ", volume=" << volume() << ")";
    }
};

class Sphere : public GeoShape
{
private:
    double r;

public:
    Sphere(double radius) : r(radius) {}

    Sphere& operator=(const Sphere& other)
    {
        if (this != &other)
            this->r = other.r;
        return *this;
    }

    double area() const override
    {
        return 4 * M_PI * r * r;
    }

    double perimeter() const override
    {
        return 0; 
    }

    double volume() const
    {
        return (4.0 / 3.0) * M_PI * r * r * r;
    }

    void print(ostream &os) const override
    {
        os << "Sphere(radius=" << r
        << ", surfaceArea=" << area()
        << ", volume=" << volume() << ")";
    }
};


class Cylinder : public GeoShape
{
private:
    double r, h;

public:
    Cylinder(double radius, double height) : r(radius), h(height) {}

    Cylinder& operator=(const Cylinder& other)
    {
        if (this != &other) {
            this->r = other.r;
            this->h = other.h;
        }
        return *this;
    }

    double area() const override
    {
        return 2 * M_PI * r * (r + h);  // Surface area
    }

    double perimeter() const override
    {
        return 0; // Not meaningful for 3D shapes
    }

    double volume() const
    {
        return M_PI * r * r * h;
    }

    void print(ostream &os) const override
    {
        os << "Cylinder(radius=" << r
           << ", height=" << h
           << ", surfaceArea=" << area()
           << ", volume=" << volume() << ")";
    }
};


bool compareShapesByArea(const GeoShape *a, const GeoShape *b)
{
    if (!a || !b)
        throw invalid_argument("null ptr");
    return (*a < *b);  // ascending
}

bool compareShapesByAreaDesc(const GeoShape *a, const GeoShape *b)
{
    if (!a || !b)
        throw invalid_argument("null ptr");
    return (*b < *a);  // descending
}

int main()
{
    cout << fixed << setprecision(4);

    vector<GeoShape *> shapes;

    shapes.push_back(new Circle(2.5));
    shapes.push_back(new Triangle(3, 4, 5));
    shapes.push_back(new Rhombus(5, 6));
    shapes.push_back(new Rectangle(4, 6));
    shapes.push_back(new Square(5));
    shapes.push_back(new Cube(3));
    shapes.push_back(new Sphere(4));     
    shapes.push_back(new Cylinder(3, 7)); 

    cout << "All shapes:\n";
    for (auto *s : shapes)
        cout << "  " << *s << "\n";

    // sort ascending by area
    sort(shapes.begin(), shapes.end(), compareShapesByArea);

    cout << "\nSorted by area:\n";
    for (auto *s : shapes)
        cout << "  " << *s << " (area=" << s->area() << ")\n";

    cout << "\nSorted by area DESC:\n";
    sort(shapes.begin(), shapes.end(), compareShapesByAreaDesc);

    for (auto *s : shapes)
        cout << "  " << *s << " (area=" << s->area() << ")\n";

    // cleanup
    for (auto *p : shapes)
        delete p;

    return 0;
}

