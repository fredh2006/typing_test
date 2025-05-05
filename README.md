# Project Overview

This project is a typing test application built using React. It allows users to test their typing speed and accuracy by typing a given set of words. The application provides real-time feedback on the user's typing, highlighting correctly typed words in green, incorrectly typed words in red, and the current word in blue. Additionally, it displays the user's words per minute (WPM) and accuracy (ACC) once the test is completed.

# Tech Stack

This project was created using React, Vite, Bulma, Font Awesome, and jQuery.

# Installation & Setup

To install dependencies and run the project locally, follow these steps:

1. Clone the repository:
   bash
   git clone https://github.com/fredh2006/typing_test.git
   cd typing_test
   

2. Install the required dependencies:
   bash
   npm install
   

3. Start the development server:
   bash
   npm run dev
   

4. Open your browser and navigate to `http://localhost:5173` to view the application.

# Project Structure

The main project structure is organized as follows:

- `src/App.jsx`: The main application component where the typing test logic is implemented.
- `src/main.jsx`: The entry point of the React application where the root component is rendered.
- `src/components/Footer.jsx`: A component that displays a footer with a link to the GitHub repository.
- `src/components/Stats.jsx`: A component that displays the words per minute (WPM) and accuracy (ACC) stats (currently placeholder values).
- `src/components/WordContainer.jsx`: A component that handles the logic for the typing test, including word highlighting and tracking user input.

# License

No license is currently being used.

Test with Supabase provider_token.