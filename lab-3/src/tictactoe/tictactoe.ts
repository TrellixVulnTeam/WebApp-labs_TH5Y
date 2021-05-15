import { Game } from "../game.model";
import { Board } from "./Board";
import { DisabledGame, watched} from "../game.decorator.disabled";


export class TicTacToe implements Game {
  name: string;

  constructor() {
    this.name = "Tic Tac Toe";
  }
  disabled?: boolean;

  @watched
  getGameElement(): HTMLElement {
    var board= new Board(3);
    return board.table;
  }


}


