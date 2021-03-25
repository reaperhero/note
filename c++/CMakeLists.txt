cmake_minimum_required(VERSION 3.0)
project(main)
add_compile_options(-std=c++11)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -g -D__STDC_CONSTANT_MACROS -Wuninitialized -D__STDC_CONSTANT_MACROS")
set(CMAKE_EXE_LINKER_FLAGS "-pthread")

# CMAKE_MODULE_PATH
set(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} "${CMAKE_SOURCE_DIR}/cmake/Modules/")

include_directories(${CMAKE_CURRENT_SOURCE_DIR})

set     (HEADERS
      workerManager.h
      boss.h
      employee.h
      manager.h
      worker.h
      workerManager.h
        )

set     (SOURCES
        workerManager.cpp
        boss.cpp
        employee.cpp
        manager.cpp
        workerManager.cpp
        )

set (PROJECT_SOURCES
        main.cpp
    )

add_executable(${PROJECT_NAME}
        ${PROJECT_SOURCES}
        ${HEADERS}
        ${SOURCES})
