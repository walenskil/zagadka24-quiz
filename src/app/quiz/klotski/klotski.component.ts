import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-klotski',
  templateUrl: './klotski.component.html',
  styleUrls: ['./klotski.component.scss']
})
export class KlotskiComponent {
  rows = 4;
  cols = 4;
  tiles: number[] = [];
  moves = 0;
  @Output() isCompleteChange = new EventEmitter<boolean>();
  isComplete = false;

  constructor() {
    this.newGame();
  }

  setRows(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    if (Number.isInteger(value) && value >= 2 && value <= 8) {
      this.rows = value;
      this.newGame();
    }
  }

  setCols(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    if (Number.isInteger(value) && value >= 2 && value <= 8) {
      this.cols = value;
      this.newGame();
    }
  }

  newGame(): void {
    const tileCount = this.rows * this.cols;
    this.tiles = Array.from({ length: tileCount }, (_, index) =>
      index === tileCount - 1 ? 0 : index + 1
    );
    this.moves = 0;
    this.isComplete = false;
    this.shuffle();
    
  }

  canMove(index: number): boolean {
    const emptyIndex = this.tiles.indexOf(0);
    const row = Math.floor(index / this.cols);
    const col = index % this.cols;
    const emptyRow = Math.floor(emptyIndex / this.cols);
    const emptyCol = emptyIndex % this.cols;
    return Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1;
  }

  moveTile(index: number): void {
    if (!this.canMove(index) || this.isComplete) {
      return;
    }
    this.isCompleteChange.emit(true);
    const emptyIndex = this.tiles.indexOf(0);
    [this.tiles[index], this.tiles[emptyIndex]] = [this.tiles[emptyIndex], this.tiles[index]];
    this.moves += 1;
    this.isComplete = this.tiles.every((tile, tileIndex) =>
      tileIndex === this.tiles.length - 1 ? tile === 0 : tile === tileIndex + 1
    );
    if (this.isComplete) {
      this.isCompleteChange.emit(true);
    }
  }

  trackByIndex(index: number): number {
    return index;
  }

  private shuffle(): void {
    let previousEmptyIndex = -1;
    const shuffleMoves = this.rows * this.cols * 20;

    for (let move = 0; move < shuffleMoves; move += 1) {
      const emptyIndex = this.tiles.indexOf(0);
      const possibleMoves = this.tiles
        .map((_, index) => index)
        .filter(index => this.canMove(index) && index !== previousEmptyIndex);
      const nextIndex = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

      [this.tiles[nextIndex], this.tiles[emptyIndex]] = [this.tiles[emptyIndex], this.tiles[nextIndex]];
      previousEmptyIndex = emptyIndex;
    }
  }
}
