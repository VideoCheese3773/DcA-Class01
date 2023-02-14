//https://github.com/LeiderCalvo/DCA/tree/05_modules
import characters from "./characters.js";
import { renderCharacter } from "./Character.js";

const container = document.getElementById("app");

characters.forEach((character) =>
    container.appendChild(renderCharacter(character))
);