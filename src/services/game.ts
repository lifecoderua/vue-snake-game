import {Snake} from '@/services/snake';

export class Game {
  field: any[][] = [];

  snake!: Snake;

  constructor({
                fieldSize = 10,
                snakeLength = 1,
  }) {
    this.initField(fieldSize);
    this.initSnake(snakeLength, fieldSize);
    this.addSnake();
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

  initSnake(snakeLength: number, fieldSize: number) {
    this.snake = new Snake(snakeLength, fieldSize);
  }

  addSnake() {
    this.snake.body.forEach(({x, y}, i) => {
      this.field[y][x] = {
        type: 'snake',
        style: i ? 'snake' : 'snake-head',
      }
    });
  }
}
