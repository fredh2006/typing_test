# Typing Test

## Project Overview
This project is a web-based typing test application where users can test their typing speed and accuracy. The app tracks the words per minute (WPM) and accuracy (ACC) as the user types words displayed on the screen. The typing test utilizes a list of common words and checks the user input against these words to calculate performance metrics such as WPM (words per minute) and accuracy (percentage of correctly typed characters).

## Tech Stack
This project was created using React, Bulma, Font Awesome, jQuery, Vite, and Vercel Speed Insights.

## Installation & Setup
To install and run the project, ensure that Node.js is installed on your machine. Run the following commands:

bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd typing-test

# Install dependencies
npm install

# Start the development server
npm run dev

You can then open your browser and navigate to the specified local URL (usually `http://localhost:5173`).

## Project Structure
- `index.html`: The main HTML file that includes the `div` element where the React app is injected.
- `src/App.jsx`: The main React component that includes state hooks for words, word count, and typing test functionalities.
- `src/components/WordContainer.jsx`: A React component that handles the main logic for the typing test including word fetching, user input handling, and statistics updates.
- `src/components/Stats.jsx`: A React component that displays the words per minute (WPM) and accuracy (ACC) on the screen.
- `src/components/Footer.jsx`: A React component that includes a footer with a link to the project's GitHub repository.

## License
No license is currently being used.