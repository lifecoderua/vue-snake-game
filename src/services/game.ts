import { Snake } from '@/services/snake';

export class Game {
  field: any[][] = [];

  snake!: Snake;

  speed = 500;

  loop!: any;

  constructor({
                fieldSize = 10,
                snakeLength = 1,
  }) {
    this.initField(fieldSize);
    this.initSnake(snakeLength, fieldSize);
    this.setSnake();
  }

  run() {
    if (this.loop) { return; }

    console.log('RUN snakey RUN!');
    this.loop = setInterval(() => this.nextStep(), this.speed);
  }

  nextStep() {
    this.snake.nextStep();
    this.setSnake();
    console.log('Field updated', this.field);
  }

  private initField(fieldSize: number) {
    for (let i = 0; i < fieldSize; i++) {
      const row = [];
      for (let j = 0; j < fieldSize; j++) {
        row.push({});
      }

      this.field.push(row);
    }
  }

  private initSnake(snakeLength: number, fieldSize: number) {
    this.snake = new Snake(snakeLength, fieldSize);
  }

  private setSnake() {
    this.field.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell.type === 'snake') {
          this.field[y][x] = {};
        }
      })
    })

    this.snake.body.forEach(({x, y}, i) => {
      this.field[y][x] = {
        type: 'snake',
        style: i ? 'snake' : 'snake-head',
      }
    });
  }
}
