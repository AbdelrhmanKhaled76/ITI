#include <iostream>
#include <unistd.h>   // for read()
#include <termios.h>  // for terminal settings
#include <cstdlib>    // for system("clear")

using namespace std;

int main() {
    int choice = 0;  // current menu item
    char key;

    // Save original terminal settings
    struct termios original, raw;
    tcgetattr(STDIN_FILENO, &original);
    raw = original;

    // Turn off buffering and echo
    raw.c_lflag &= ~(ICANON | ECHO);
    tcsetattr(STDIN_FILENO, TCSANOW, &raw);

    while (true) {
        system("clear"); // Clear screen
        cout << "Use UP and DOWN arrows to move, ENTER to select.\n\n";

        // Menu items
        cout << (choice == 0 ? "\033[31m> New\033[0m\n"        : "  New\n");
        cout << (choice == 1 ? "\033[31m> Display\033[0m\n"    : "  Display\n");
        cout << (choice == 2 ? "\033[31m> Display All\033[0m\n": "  Display All\n");
        cout << (choice == 3 ? "\033[31m> Exit\033[0m\n"       : "  Exit\n");

        // Read one key
        read(STDIN_FILENO, &key, 1);

        // Handle arrow keys (they send 3 chars: ESC [ A or B)
        if (key == '\033') {
            char seq[2];
            read(STDIN_FILENO, &seq[0], 1);
            read(STDIN_FILENO, &seq[1], 1);

            if (seq[0] == '[') {
                if (seq[1] == 'A' && choice > 0) choice--;      // UP
                else if (seq[1] == 'B' && choice < 3) choice++; // DOWN
            }
        }
        // ENTER key (ASCII 10 on Linux)
        else if (key == '\n') {
            system("clear");

            if (choice == 0)      cout << "You chose: New\n";
            else if (choice == 1) cout << "You chose: Display\n";
            else if (choice == 2) cout << "You chose: Display All\n";
            else if (choice == 3) {
                cout << "Exiting...\n";
                break;
            }

            cout << "\nPress any key to return to menu...";
            read(STDIN_FILENO, &key, 1); // wait for key press
        }
    }

    // Restore original terminal settings
    tcsetattr(STDIN_FILENO, TCSANOW, &original);
    return 0;
}
