import { GameFactory } from "./game.factory";
import { Games } from "./games.enum";
import { Game } from "./game.model";
import { TicTacToe } from "./tictactoe/tictactoe";


class App {


    constructor() {
        this.init();
    }

    init(): void {
        const bodyElement = document.getElementById('body');
        const menuContainer = <HTMLDivElement>(document.createElement('div')); // kontener menu dostępnych gier
        menuContainer.className = "menu-container";
        const gameContainer = <HTMLDivElement>(document.createElement('div')); // kontener główny ekranu z grą
        const list = document.createElement('ul'); // lista pozycji w menu dostępnych gier
        const gameFactory: GameFactory = new GameFactory();
        for (const gameEnum in Games) {
            let gameNumber: number = Number(gameEnum);
            if (!isNaN(gameNumber)) {
                let gameObject: Game = gameFactory.createGame(gameNumber);
                var dropdownLink = document.createElement('li');
                dropdownLink.appendChild(document.createTextNode(gameObject.name));
                console.log(gameObject);
                dropdownLink.addEventListener('click', (event) =>  {
                    gameContainer.innerHTML = "";
                    gameContainer.appendChild(gameObject.getGameElement());             
                })
                list.appendChild(dropdownLink);
            }
        }

        const title = document.createElement('h1');
        title.innerHTML = "AWESOOOOME GAMES"
        menuContainer.appendChild(title);
        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
console.log(bodyElement.className);
        const modeButton = <HTMLInputElement>document.getElementById('checkbox');
        modeButton.addEventListener('click', function toggle() {
            if(modeButton.checked) {
                bodyElement.classList.add('dark-mode');
            }
            else {
                bodyElement.classList.remove('dark-mode');
            }   
        })
    }

}

new App();