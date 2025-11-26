#include <iostream>
#include <string>
#include <unistd.h>
#include <termios.h>
#include <sys/ioctl.h>

using namespace std;

// ===== Utility functions for Linux terminal =====

// Move cursor to position
void setCursorPosition(int x, int y) {
    cout << "\033[" << y << ";" << x << "H";
    cout.flush();
}

// Change text color (foreground + background using ANSI)
void setColor(int colorCode) {
    switch (colorCode) {
        case 7:  cout << "\033[0m"; break;          // reset
        case 10: cout << "\033[32m"; break;         // green text
        case 11: cout << "\033[36m"; break;         // cyan text
        case 240: cout << "\033[47;30m"; break;     // white background, black text
        default: cout << "\033[0m"; break;
    }
    cout.flush();
}

// Get console width and height
void getConsoleSize(int& width, int& height) {
    struct winsize w;
    ioctl(STDOUT_FILENO, TIOCGWINSZ, &w);
    width = w.ws_col;
    height = w.ws_row;
}

// Draw colored rectangle (box)
void drawBox(int x, int y, int width, int height) {
    setColor(240); // white background
    for (int i = 0; i < height; i++) {
        setCursorPosition(x, y + i);
        for (int j = 0; j < width; j++)
            cout << " ";
    }
    setColor(7); // reset color
    cout.flush();
}

// Display text inside box (with proper cursor highlight)
void displayLine(const string& line, int cursorPos, int x, int y, int width) {
    setColor(240);
    setCursorPosition(x + 2, y + 1);

    for (int i = 0; i < width - 4; i++) {
        if (i < (int)line.size()) {
            if (i == cursorPos) {
                cout << "\033[7m" << line[i] << "\033[27m"; // inverted cursor
            } else {
                cout << line[i];
            }
        } else {
            if (i == cursorPos) {
                cout << "\033[7m \033[27m"; // inverted empty space at cursor
            } else {
                cout << " ";
            }
        }
    }

    cout.flush();
}

// Get single key without Enter
int getch() {
    termios oldt, newt;
    int ch;
    tcgetattr(STDIN_FILENO, &oldt);
    newt = oldt;
    newt.c_lflag &= ~(ICANON | ECHO);
    tcsetattr(STDIN_FILENO, TCSANOW, &newt);
    ch = getchar();
    tcsetattr(STDIN_FILENO, TCSANOW, &oldt);
    return ch;
}

int main() {
    string line;
    int cursorPos = 0;

    int consoleWidth, consoleHeight;
    getConsoleSize(consoleWidth, consoleHeight);

    const int boxWidth = 50;
    const int boxHeight = 3;
    int boxX = (consoleWidth - boxWidth) / 2;
    int boxY = (consoleHeight - boxHeight) / 2;

    system("clear");
    setColor(11);
    cout << "\n\n--- Simple Line Editor ---\n";
    setColor(7);
    cout << "(Use arrows, Home, End, Backspace, Delete)\n";
    cout << "Press Enter to finish.\n\n";

    drawBox(boxX, boxY, boxWidth, boxHeight);
    displayLine(line, cursorPos, boxX, boxY, boxWidth);

    while (true) {
        int ch = getch();

        if (ch == 10) break; // Enter

        if (ch == 27) { // ESC sequence
            int next1 = getch();
            if (next1 == 91) {
                int next2 = getch();
                switch (next2) {
                    case 'D': if (cursorPos > 0) cursorPos--; break;              // Left
                    case 'C': if (cursorPos < (int)line.size()) cursorPos++; break; // Right
                    case 'H': cursorPos = 0; break;                               // Home
                    case 'F': cursorPos = line.size(); break;                     // End
                    case '3': { // Delete key
                        if (getch() == '~' && cursorPos < (int)line.size())
                            line.erase(cursorPos, 1);
                        break;
                    }
                }
            }
        }
        else if (ch == 127) { // Backspace
            if (cursorPos > 0) {
                line.erase(cursorPos - 1, 1);
                cursorPos--;
            }
        }
        else if (isprint(ch)) { // Printable characters
            if ((int)line.size() < boxWidth - 4) {
                line.insert(cursorPos, 1, (char)ch);
                cursorPos++;
            }
        }

        displayLine(line, cursorPos, boxX, boxY, boxWidth);
    }

    setColor(7); // reset before printing result
    setCursorPosition(boxX, boxY + boxHeight + 2);
    setColor(10);
    cout << "Final Input: ";
    setColor(7);
    cout << line << endl;

    cout.flush();
    return 0;
}
