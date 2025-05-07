# Project Overview

This project is titled "typeit" and appears to be a web-based typing test application created primarily with React. When a user types a given set of randomized words displayed on the screen, the application tracks typing speed (Words Per Minute) and typing accuracy. The project provides real-time feedback on display words highlighted for accuracy (green for correctly typed words and red for incorrect ones).

# Tech Stack

This project was created using React, HTML, CSS, Bulma, jQuery, FontAwesome, and Vercel Speed Insights.

# Installation & Setup

To install and run the project, follow these steps:

1. Navigate into the project folder:
   bash
   cd typing-test
   

2. Install the required dependencies:
   bash
   npm install
   

3. Start the development server with:
   bash
   npm run dev
   
    
Optionally, run `npm run build` to build the project or `npm run preview` to preview your build.

# Project Structure

- `index.html`: Main HTML file that loads scripts and stylesheets including Bulma CSS and jQuery.
- `package.json`: Includes project scripts and dependencies such as React, Bulma, jQuery, and @fortawesome packages.
- `src/App.jsx`: Main React component that includes state management and renders `WordContainer`, `Stats`, and `Footer` components.
- `src/components/Footer.jsx`: Component that renders the footer section which includes a link to the project GitHub repository.
- `src/components/Stats.jsx`: Component that displays statistics such as words per minute (WPM) and accuracy (ACC).
- `src/components/WordContainer.jsx`: Component handling typed words display and user typing interaction processing logic.

# License

No license is currently being used.