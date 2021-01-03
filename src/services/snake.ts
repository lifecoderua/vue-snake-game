enum Direction {
  up,
  down,
  left,
  right,
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
}
