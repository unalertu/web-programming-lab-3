# University Course Management System

This project is a simple university grading system written in JavaScript.

## File Organization

- `models.js` contains the `Student` class.
- `database.js` fetches the student data after a two-second delay.
- `analytics.js` contains the calculation and filtering functions.
- `main.js` connects all files and prints the report.
- `package.json` lets the project use ES modules.


## Challenges

The main challenge was making the student ID read-only while keeping the other student information usable. Another challenge was running the calculations only after the asynchronous data was received.
