# Calculator
 
A simple web calculator built with HTML, CSS and vanilla JavaScript.
 
## Features
 
- Basic operations: addition, subtraction, multiplication and division
- Decimal number support
- `C` button to clear the whole input
- `⌫` button to delete the last entered character
- Clean, simple layout with a header and button grid
## Tech Stack
 
- **HTML5** – structure of the calculator
- **CSS3** – styling and layout (`style.css`)
- **JavaScript (ES5)** – calculator logic (`app.js`)
## Project Structure
 
```
calculator/
├── index.html   # Page markup and buttons
├── style.css    # Styling
├── app.js       # Calculator logic
└── README.md
```
 
## Getting Started
 
1. Clone the repository:
```bash
git clone https://github.com/syedmuhammadbilalshakeel1/calculator_ass
```
2. Open the project folder:
```bash
cd calculator_ass
```
3. Open `index.html` in any web browser. No installation or build step is needed.
## How It Works
 
- `setInput(value)` appends the clicked number or operator to the input field.
- `calcAns()` evaluates the expression and shows the result.
- `removeOne()` removes the last character from the input.
- `clearAll()` clears the entire input.
## Screenshot
<img width="752" height="564" alt="image" src="https://github.com/user-attachments/assets/48b62b95-0f48-4c38-917b-d1d31edf6897" />

 
## Future Improvements
 
- Working `()` and `%` buttons
- Keyboard input support
- Replace `eval()` with a safer expression parser
- Responsive design for mobile screens
## License
 
This project is open source and available under the [MIT License](LICENSE).
 
## Author
 
Made by **syedmuhammadbilalshakeel1** – [GitHub](https://github.com/syedmuhammadbilalshakeel1)
