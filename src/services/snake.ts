export enum Direction {
  up,
  down,
  left,
  right,
}

const directionMove: any = {
  [Direction.up]: { y: -1 },
  [Direction.down]: { y: 1 },
  [Direction.left]: { x: -1 },
  [Direction.right]: { x: 1 },
}

export class Snake {
  direction!: Direction;

  // [head, body1, ..., tail]
  body: any[] = [];

  constructor(length = 1, fieldSize = 10) {
    // TODO: support greater snake length
    const startPointX = Math.floor(fieldSize / 2);
    const startPointY = startPointX;

    this.body.unshift({
      x: startPointX,
      y: startPointY,
    });
  }

  setDirection(newDirection: Direction) {
    // TODO: check it's not the primary body block direction
    this.direction = newDirection;
    console.log(this.direction);
  }

  get head() {
    return this.body[0];
  }

  nextStep() {
    const nextCoordDelta = directionMove[this.direction];

    const newHead = {
      x: this.head.x + nextCoordDelta.x,
      y: this.head.y + nextCoordDelta.y,
    }

    this.body.unshift(newHead);
    this.body.pop();
  }
}
