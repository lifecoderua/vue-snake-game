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

  fieldSize!: number;

  collision = false;

  // [head, body1, ..., tail]
  body: any[] = [];

  constructor(length = 1, fieldSize = 10) {
    // TODO: support greater snake length
    const startPointX = Math.floor(fieldSize / 2);
    const startPointY = startPointX;

    this.collision = false;
    this.fieldSize = fieldSize;

    for (let i = 0; i < length; i++) {
      this.body.push({
        x: startPointX - i,
        y: startPointY,
      });
    }
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

    // debugger;
    const newHead = {
      x: this.head.x + (nextCoordDelta.x || 0),
      y: this.head.y + (nextCoordDelta.y || 0),
    }

    // TODO: extract
    // TODO: body collision check
    if (newHead.x < 0 || newHead.x >= this.fieldSize || newHead.y < 0 || newHead.y >= this.fieldSize) {
      console.log('collision');
      this.collision = true;
      return;
    }

    this.body.unshift(newHead);
    this.body.pop();
  }
}
