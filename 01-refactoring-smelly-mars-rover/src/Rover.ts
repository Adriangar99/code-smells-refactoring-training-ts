import {
  Direction,
  isFacingNorth,
  isFacingSouth,
  isFacingWest,
  rotateLeft,
  rotateRight,
} from "./Direction";

export class Rover {
  private y: number;
  private x: number;
  private direction: Direction;

  constructor(x: number, y: number, direction: Direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  public receive(commandsSequence: string) {
    for (let i = 0; i < commandsSequence.length; ++i) {
      const command = commandsSequence.substring(i, i + 1);

      if (command === "l") {
        this.direction = rotateLeft(this.direction);
      } else if (command === "r") {
        this.direction = rotateRight(this.direction);
      } else {
        // Displace Rover
        let displacement1 = -1;

        if (command === "f") {
          displacement1 = 1;
        }
        let displacement = displacement1;

        if (isFacingNorth(this.direction)) {
          this.y += displacement;
        } else if (isFacingSouth(this.direction)) {
          this.y -= displacement;
        } else if (isFacingWest(this.direction)) {
          this.x -= displacement;
        } else {
          this.x += displacement;
        }
      }
    }
  }
}
