cmake_minimum_required(VERSION 3.29)
project(Movie)

set(CMAKE_CXX_STANDARD 20)

add_executable(App
    main.cpp
    User.cpp
    ShowTime.cpp
    Movie.cpp
    Customer.cpp
    Admin.cpp
    globals.cpp
    Auth.cpp
    Routes.cpp
    Menus.cpp
)
