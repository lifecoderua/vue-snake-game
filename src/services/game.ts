import { Snake } from '@/services/snake';
import {Coord} from '@/types/coord';

const COLLIDABLE_TYPES = ['snake'];

export class Game {
  field: any[][] = [];

  fieldSize: number;

  snake!: Snake;

  collision = false;

  speed = 500;

  meatPosition!: Coord;

  loop!: any;

  constructor({
                fieldSize = 10,
                snakeLength = 1,
  }) {
    this.initField(fieldSize);
    this.initSnake(snakeLength, fieldSize);
    this.setSnake();
    this.collision = false;
    this.fieldSize = fieldSize;
    this.generateMeat();
  }

  generateMeat() {
    this.meatPosition = {
      x: 4,
      y: 4,
    };

    this.field[this.meatPosition.y][this.meatPosition.x] = {
      type: 'meat',
      style: 'meat',
    }
  }

  run(updateHandler: any) {
    if (this.loop) { return; }

    console.log('RUN snakey RUN!');
    this.loop = setInterval(() => this.nextStep(updateHandler), this.speed);
  }

  onCollision() {
    this.collision = true;
    clearInterval(this.loop);
    console.log('Loop stop. Collision!');
  }

  nextStep(updateHandler: any) {
    this.snake.nextStep();
    if (this.snake.collision) {
      this.onCollision();
    }
    this.setSnake();
    console.log('Field updated', this.field);

    updateHandler(this);
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

  private checkCollision(x: number, y: number) {
    if (COLLIDABLE_TYPES.includes(this.field[y][x].type)) {
      this.onCollision();
      return;
    }

    if (this.field[y][x].type === 'meat') {
      this.snake.grow();
      // TODO: put new piece
      // this.generateMeat();
    }
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
      this.checkCollision(x, y);

      this.field[y][x] = {
        type: 'snake',
        style: i ? 'snake' : 'snake-head',
      }
    });
  }
}
