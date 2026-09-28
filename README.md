<!-- PROJECT LOGO -->

<br />
<p align="center">
  <a href="https://github.com/goutam-vg/Tic-Tac-TOE">
    <img src="backG.png" alt="Tic-Tac-Toe Logo" width="150" height="150">
  </a>

  <h3 align="center">Tic-Tac-Toe</h3>

  <p align="center">
    A simple and interactive Tic-Tac-Toe game built using HTML, CSS and JavaScript.
    <br />
    <br />
    <a href="#usage">View Demo</a>
    ·
    <a href="https://github.com/goutam-vg/Tic-Tac-TOE/issues">Report Bug</a>
    ·
    <a href="https://github.com/goutam-vg/Tic-Tac-TOE/issues">Request Feature</a>
  </p>
</p>

---

<!-- TABLE OF CONTENTS -->

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#game-rules">Game Rules</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#authors">Authors</a></li>
  </ol>
</details>

---

<!-- ABOUT THE PROJECT -->

## About The Project

Tic-Tac-Toe is a classic two-player game built as a web application using **HTML, CSS and vanilla JavaScript**.

The game allows two players to take turns placing their symbols on a 3×3 board. After every move, the game checks for a winning combination or a draw.

The project was created to practice:

* JavaScript DOM manipulation
* Event handling
* Conditional logic
* Arrays
* Game-state management
* Basic frontend development

### Built With

This project was built using:

* [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

<!-- GETTING STARTED -->

## Getting Started

Since this is a frontend project, no additional packages or frameworks are required.

### Prerequisites

You only need:

* A modern web browser
* Git (optional, if you want to clone the repository)

### Installation

1. Clone the repository.

   ```sh
   git clone https://github.com/goutam-vg/Tic-Tac-TOE.git
   ```

2. Open the project folder.

   ```sh
   cd Tic-Tac-TOE
   ```

3. Open `index.html` in your browser.

That's it! No additional installation is required.

---

<!-- USAGE -->

## Usage

Open the game in your browser and start playing.

### How to Play

1. Player **O** starts the game.
2. Players take turns selecting an empty cell.
3. Player **X** and Player **O** alternate turns.
4. The game checks the board after every move.
5. The first player to complete a winning combination wins.
6. If all cells are filled without a winner, the game ends in a draw.
7. Use the **Reset Game** or **New Game** option to start another game.

---

<!-- GAME RULES -->

## Game Rules

A player wins by placing three of their symbols in one of the following patterns:

```text
Horizontal:

X | X | X
---------
O | O |
---------
  |   |


Vertical:

X | O |
---------
X | O |
---------
X |   |


Diagonal:

X | O |
---------
O | X |
---------
  |   | X
```

The JavaScript logic checks all possible winning combinations after each move.

---

<!-- PROJECT STRUCTURE -->

## Project Structure

```text
Tic-Tac-TOE/
│
├── index.html
├── styles.css
├── tic-tac-toe.js
├── backG.png
├── backGa.png
│
└── .github/
    └── workflows/
```

### Main Files

| File             | Description                              |
| ---------------- | ---------------------------------------- |
| `index.html`     | Contains the structure of the game       |
| `styles.css`     | Handles the visual design and layout     |
| `tic-tac-toe.js` | Contains the game logic and interactions |
| `backG.png`      | Background/image asset                   |
| `backGa.png`     | Additional image asset                   |

---

<!-- ROADMAP -->

## Roadmap

Future improvements that could be added to the project:

* [ ] Add single-player mode
* [ ] Add an AI opponent
* [ ] Add difficulty levels
* [ ] Add player names
* [ ] Add score tracking
* [ ] Add sound effects
* [ ] Add winning animations
* [ ] Add smoother transitions
* [ ] Improve mobile responsiveness
* [ ] Add more interactive UI animations

Have another idea? Feel free to open an issue and suggest it.

---

<!-- CONTRIBUTING -->

## Contributing

Contributions are welcome!

If you would like to improve this project, you can:

1. Fork the repository.

2. Create a new feature branch.

   ```sh
   git checkout -b feature/YourFeature
   ```

3. Make your changes.

4. Commit your changes.

   ```sh
   git commit -m "Add YourFeature"
   ```

5. Push your branch.

   ```sh
   git push origin feature/YourFeature
   ```

6. Open a Pull Request.

### 🎨 Animation Contributions

One area where contributions are especially welcome is **UI animation**.

You can contribute animations such as:

* Winning-cell animations
* Hover effects
* Player-move animations
* New-game transitions
* Button animations
* Draw-state animations
* Smooth board transitions

If you add an animation, please make sure it does not interfere with the existing game functionality.

---

<!-- LICENSE -->

## License

This project is available under the MIT License.

See the `LICENSE` file for more information.

---

<!-- AUTHORS -->

## Authors

**Goutam VG**

GitHub: `https://github.com/goutam-vg`

Project: `https://github.com/goutam-vg/Tic-Tac-TOE`

---

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

* MDN Web Docs
* GitHub
* JavaScript community
* Everyone who contributes to improving the project

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐.

Contributions, suggestions and feedback are always welcome.
