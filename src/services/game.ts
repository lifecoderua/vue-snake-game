import {Snake} from '@/services/snake';

export class Game {
  field: any[][] = [];

  snake!: Snake;

  constructor({
                fieldSize = 10,
                snakeLength = 1,
  }) {
    this.initField(fieldSize);
    this.initSnake(snakeLength);
  }

  initField(fieldSize: number) {
    for (let i = 0; i < fieldSize; i++) {
      const row = [];
      for (let j = 0; j < fieldSize; j++) {
        row.push({});
      }

      this.field.push(row);
    }
  }

  initSnake(snakeLength: number) {
    this.snake = new Snake(snakeLength);
  }
}
