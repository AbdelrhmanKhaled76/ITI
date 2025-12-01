#ifndef AUTH_H
#define AUTH_H

#include <string>

void registerForm();
int loginForm();
bool isEmailUnique(std::string& email);

#endif
