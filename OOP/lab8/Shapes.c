// dynamic way
#include <iostream>
#include "SimpleGraphics.h"
using namespace std;

// ========================
// Point Class
// ========================
class Point {
public:
    int x, y;
    Point(int x=0, int y=0) : x(x), y(y) {}
};

// ========================
// Shapes
// ========================
class RectangleShape {
public:
    Point* p1;
    Point* p2;
    RectangleShape(int x1,int y1,int x2,int y2) {
        p1 = new Point(x1,y1);
        p2 = new Point(x2,y2);
    }
    ~RectangleShape() { delete p1; delete p2; }
    void draw() { drawRect(p1->x,p1->y,p2->x,p2->y); }
};

class CircleShape {
public:
    Point* center;
    int radius;
    CircleShape(int cx,int cy,int r) { center = new Point(cx,cy); radius=r; }
    ~CircleShape() { delete center; }
    void draw() { drawCircle(center->x,center->y,radius); }
};

class LineShape {
public:
    Point* start;
    Point* end;
    LineShape(int x1,int y1,int x2,int y2) { start=new Point(x1,y1); end=new Point(x2,y2); }
    ~LineShape() { delete start; delete end; }
    void draw() { drawLine(start->x,start->y,end->x,end->y); }
};

class TriangleShape {
public:
    Point* a;
    Point* b;
    Point* c;
    TriangleShape(int x1,int y1,int x2,int y2,int x3,int y3) {
        a=new Point(x1,y1); b=new Point(x2,y2); c=new Point(x3,y3);
    }
    ~TriangleShape() { delete a; delete b; delete c; }
    void draw() { drawTriangle(a->x,a->y,b->x,b->y,c->x,c->y); }
};

// ========================
// Picture Class (pointer-to-pointer arrays)
// ========================
class Picture {
private:
    RectangleShape** rectangles;
    CircleShape** circles;
    LineShape** lines;
    TriangleShape** triangles;

    int rectCount, circleCount, lineCount, triCount;

public:
    Picture(int rects,int circs,int linesNum,int tris) {
        rectCount = 0;
        circleCount = 0;
        lineCount = 0;
        triCount = 0;

        // Allocate double pointer arrays
        rectangles = new RectangleShape*[rects];
        circles = new CircleShape*[circs];
        lines = new LineShape*[linesNum];
        triangles = new TriangleShape*[tris];
    }

    ~Picture() {
        for(int i=0;i<rectCount;i++) delete rectangles[i];
        for(int i=0;i<circleCount;i++) delete circles[i];
        for(int i=0;i<lineCount;i++) delete lines[i];
        for(int i=0;i<triCount;i++) delete triangles[i];

        delete[] rectangles;
        delete[] circles;
        delete[] lines;
        delete[] triangles;
    }

    void addRectangle(int x1,int y1,int x2,int y2) { rectangles[rectCount++] = new RectangleShape(x1,y1,x2,y2); }
    void addCircle(int cx,int cy,int r) { circles[circleCount++] = new CircleShape(cx,cy,r); }
    void addLine(int x1,int y1,int x2,int y2) { lines[lineCount++] = new LineShape(x1,y1,x2,y2); }
    void addTriangle(int x1,int y1,int x2,int y2,int x3,int y3) { triangles[triCount++] = new TriangleShape(x1,y1,x2,y2,x3,y3); }

    void paint() {
        for(int i=0;i<rectCount;i++) rectangles[i]->draw();
        for(int i=0;i<circleCount;i++) circles[i]->draw();
        for(int i=0;i<lineCount;i++) lines[i]->draw();
        for(int i=0;i<triCount;i++) triangles[i]->draw();
    }
};

// ========================
// MAIN
// ========================
int main() {
    initScreen();

    int nRect,nCircle,nLine,nTriangle;
    cout << "Enter number of Rectangles: "; cin >> nRect;
    cout << "Enter number of Circles: ";    cin >> nCircle;
    cout << "Enter number of Lines: ";      cin >> nLine;
    cout << "Enter number of Triangles: ";  cin >> nTriangle;

    Picture* pic = new Picture(nRect,nCircle,nLine,nTriangle);

    for(int i=0;i<nRect;i++){
        int x1,y1,x2,y2;
        cout << "Rectangle " << i+1 << " (x1 y1 x2 y2): ";
        cin >> x1 >> y1 >> x2 >> y2;
        pic->addRectangle(x1,y1,x2,y2);
    }

    for(int i=0;i<nCircle;i++){
        int cx,cy,r;
        cout << "Circle " << i+1 << " (cx cy radius): ";
        cin >> cx >> cy >> r;
        pic->addCircle(cx,cy,r);
    }

    for(int i=0;i<nLine;i++){
        int x1,y1,x2,y2;
        cout << "Line " << i+1 << " (x1 y1 x2 y2): ";
        cin >> x1 >> y1 >> x2 >> y2;
        pic->addLine(x1,y1,x2,y2);
    }

    for(int i=0;i<nTriangle;i++){
        int x1,y1,x2,y2,x3,y3;
        cout << "Triangle " << i+1 << " (x1 y1 x2 y2 x3 y3): ";
        cin >> x1 >> y1 >> x2 >> y2 >> x3 >> y3;
        pic->addTriangle(x1,y1,x2,y2,x3,y3);
    }

    pic->paint();

    drawText(3,1,"Single Picture with Multiple Shapes");
    renderScreen();

    delete pic;
    return 0;
}


// 3 20 25 30

// 60 25 15

// 10 35 110 35

// 20 5 40 30 5 30


// static way
#include <iostream>
#include <vector>
#include "SimpleGraphics.h"
using namespace std;

// ========================
// Point Class
// ========================
class Point {
public:
    int x, y;
    Point(int x=0, int y=0) : x(x), y(y) {}
};

// ========================
// Shapes
// ========================
class RectangleShape {
public:
    Point p1, p2;
    RectangleShape(int x1, int y1, int x2, int y2) : p1(x1,y1), p2(x2,y2) {}
    void draw() { drawRect(p1.x, p1.y, p2.x, p2.y); }
};

class CircleShape {
public:
    Point center;
    int radius;
    CircleShape(int cx, int cy, int r) : center(cx,cy), radius(r) {}
    void draw() { drawCircle(center.x, center.y, radius); }
};

class LineShape {
public:
    Point start, end;
    LineShape(int x1,int y1,int x2,int y2) : start(x1,y1), end(x2,y2) {}
    void draw() { drawLine(start.x, start.y, end.x, end.y); }
};

class TriangleShape {
public:
    Point a,b,c;
    TriangleShape(int x1,int y1,int x2,int y2,int x3,int y3)
        : a(x1,y1), b(x2,y2), c(x3,y3) {}
    void draw() { drawTriangle(a.x,a.y,b.x,b.y,c.x,c.y); }
};

// ========================
// Picture Class
// ========================
class Picture {
private:
    vector<RectangleShape> rectangles;
    vector<CircleShape> circles;
    vector<LineShape> lines;
    vector<TriangleShape> triangles;

public:
    void addRectangle(int x1,int y1,int x2,int y2) {
        rectangles.push_back(RectangleShape(x1,y1,x2,y2));
    }

    void addCircle(int cx,int cy,int r) {
        circles.push_back(CircleShape(cx,cy,r));
    }

    void addLine(int x1,int y1,int x2,int y2) {
        lines.push_back(LineShape(x1,y1,x2,y2));
    }

    void addTriangle(int x1,int y1,int x2,int y2,int x3,int y3) {
        triangles.push_back(TriangleShape(x1,y1,x2,y2,x3,y3));
    }

    void paint() {
        for (auto &r : rectangles) r.draw();
        for (auto &c : circles) c.draw();
        for (auto &l : lines) l.draw();
        for (auto &t : triangles) t.draw();
    }
};

// ========================
// MAIN
// ========================
int main() {
    initScreen();

    int nRect, nCircle, nLine, nTriangle;
    cout << "Enter number of Rectangles: "; cin >> nRect;
    cout << "Enter number of Circles: ";    cin >> nCircle;
    cout << "Enter number of Lines: ";      cin >> nLine;
    cout << "Enter number of Triangles: ";  cin >> nTriangle;

    // Create Picture dynamically (no counts needed)
    Picture* pic = new Picture();

    // Input Rectangles
    for(int i = 0; i < nRect; i++) {
        int x1, y1, x2, y2;
        cout << "Rectangle " << i+1 << " (x1 y1 x2 y2): ";
        cin >> x1 >> y1 >> x2 >> y2;
        pic->addRectangle(x1, y1, x2, y2);
    }

    // Input Circles
    for(int i = 0; i < nCircle; i++) {
        int cx, cy, r;
        cout << "Circle " << i+1 << " (cx cy radius): ";
        cin >> cx >> cy >> r;
        pic->addCircle(cx, cy, r);
    }

    // Input Lines
    for(int i = 0; i < nLine; i++) {
        int x1, y1, x2, y2;
        cout << "Line " << i+1 << " (x1 y1 x2 y2): ";
        cin >> x1 >> y1 >> x2 >> y2;
        pic->addLine(x1, y1, x2, y2);
    }

    // Input Triangles
    for(int i = 0; i < nTriangle; i++) {
        int x1, y1, x2, y2, x3, y3;
        cout << "Triangle " << i+1 << " (x1 y1 x2 y2 x3 y3): ";
        cin >> x1 >> y1 >> x2 >> y2 >> x3 >> y3;
        pic->addTriangle(x1, y1, x2, y2, x3, y3);
    }

    // Draw everything
    pic->paint();

    drawText(3, 1, "Single Picture with Multiple Shapes");
    renderScreen();

    delete pic; // free memory
    return 0;
}



