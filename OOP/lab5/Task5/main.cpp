#include <iostream>
#include <unistd.h>
#include <termios.h>
#include <sys/ioctl.h>
#include <cstring>   // for strlen, memcpy

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

// Display text inside box (with thin cursor)

void displayLine(char* buffer, int length, int cursorPos, int x, int y, int width) {
    setColor(240);
    setCursorPosition(x + 2, y + 1);

    for (int i = 0; i < width - 4; i++) {
        if (i < length) {
            if (i == cursorPos) {
                cout << "\033[7m" << buffer[i] << "\033[27m"; // inverted cursor
            } else {
                cout << buffer[i];
            }
        } else {
            if (i == cursorPos) {
                cout << "\033[7m \033[27m";
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
    const int MAX_LENGTH = 256;               // max characters in line
    char* buffer = new char[MAX_LENGTH];      // dynamically allocated buffer
    memset(buffer, 0, MAX_LENGTH);

    int length = 0;       // current number of characters
    int cursorPos = 0;

    int consoleWidth, consoleHeight;
    getConsoleSize(consoleWidth, consoleHeight);

    const int boxWidth = 50;
    const int boxHeight = 3;
    int boxX = (consoleWidth - boxWidth) / 2;
    int boxY = (consoleHeight - boxHeight) / 2;

    system("clear");
    setColor(11);
    cout << "\n\n--- Simple Line Editor (Dynamic Buffer) ---\n";
    setColor(7);
    cout << "(Use arrows, Home, End, Backspace, Delete)\n";
    cout << "Press Enter to finish.\n\n";

    drawBox(boxX, boxY, boxWidth, boxHeight);
    displayLine(buffer, length, cursorPos, boxX, boxY, boxWidth);

    while (true) {
        int ch = getch();

        if (ch == 10) break; // Enter

        if (ch == 27) { // ESC sequence
            int next1 = getch();
            if (next1 == 91) {
                int next2 = getch();
                switch (next2) {
                    case 'D': if (cursorPos > 0) cursorPos--; break;              // Left
                    case 'C': if (cursorPos < length) cursorPos++; break;         // Right
                    case 'H': cursorPos = 0; break;                               // Home
                    case 'F': cursorPos = length; break;                           // End
                    case '3': { // Delete key
                        if (getch() == '~' && cursorPos < length) {
                            // Shift left
                            for (int i = cursorPos; i < length - 1; i++)
                                buffer[i] = buffer[i + 1];
                            buffer[length - 1] = 0;
                            length--;
                        }
                        break;
                    }
                }
            }
        }
        else if (ch == 127) { // Backspace
            if (cursorPos > 0) {
                for (int i = cursorPos - 1; i < length - 1; i++)
                    buffer[i] = buffer[i + 1];
                buffer[length - 1] = 0;
                cursorPos--;
                length--;
            }
        }
        else if (isprint(ch)) { // Printable characters
            if (length < MAX_LENGTH - 1 && length < boxWidth - 4) {
                // Shift right
                for (int i = length; i > cursorPos; i--)
                    buffer[i] = buffer[i - 1];
                buffer[cursorPos] = (char)ch;
                cursorPos++;
                length++;
            }
        }

        displayLine(buffer, length, cursorPos, boxX, boxY, boxWidth);
    }

    setColor(7);
    setCursorPosition(boxX, boxY + boxHeight + 2);
    setColor(10);
    cout << "Final Input: ";
    setColor(7);
    cout << buffer << endl;

    delete[] buffer; // free dynamic memory
    cout.flush();
    return 0;
}
