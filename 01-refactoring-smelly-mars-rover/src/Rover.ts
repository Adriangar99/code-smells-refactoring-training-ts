import { Direction } from "./Direction";

export class Rover {
  private direction: string;
  private y: number;
  private x: number;
  private direction2: Direction;

  constructor(x: number, y: number, direction: string) {
    this.x = x;
    this.y = y;
    this.setDirection(direction);
  }

  private setDirection(direction: string) {
    this.direction = direction;
    this.direction2 = direction as any as Direction;
  }

  public receive(commandsSequence: string) {
    for (let i = 0; i < commandsSequence.length; ++i) {
      const command = commandsSequence.substring(i, i + 1);

      if (command === "l") {
        this.rotateLeft();
      } else if (command === "r") {
        this.rotateRight();
      } else {
        // Displace Rover
        let displacement1 = -1;

        if (command === "f") {
          displacement1 = 1;
        }
        let displacement = displacement1;

        if (this.isFacingNorth()) {
          this.y += displacement;
        } else if (this.isFacingSouth()) {
          this.y -= displacement;
        } else if (this.isFacingWest(this.direction2)) {
          this.x -= displacement;
        } else {
          this.x += displacement;
        }
      }
    }
  }

  private isFacingWest(direction: Direction) {
    return direction === Direction.W;
  }

  private isFacingSouth() {
    return this.direction2 === Direction.S;
  }

  private isFacingNorth() {
    return this.direction2 === Direction.N;
  }

  private rotateLeft() {
    if (this.isFacingNorth()) {
      this.setDirection("W");
    } else if (this.isFacingSouth()) {
      this.setDirection("E");
    } else if (this.isFacingWest(this.direction2)) {
      this.setDirection("S");
    } else {
      this.setDirection("N");
    }
  }

  private rotateRight() {
    if (this.isFacingNorth()) {
      this.setDirection("E");
    } else if (this.isFacingSouth()) {
      this.setDirection("W");
    } else if (this.isFacingWest(this.direction2)) {
      this.setDirection("N");
    } else {
      this.setDirection("S");
    }
  }
}
