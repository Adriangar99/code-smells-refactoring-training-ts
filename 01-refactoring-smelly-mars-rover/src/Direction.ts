export enum Direction {
  N = "N",
  S = "S",
  W = "W",
  E = "E",
}

export function isFacingNorth(direction: Direction) {
  return direction === Direction.N;
}

export function isFacingSouth(direction: Direction) {
  return direction === Direction.S;
}

export function isFacingWest(direction: Direction) {
  return direction === Direction.W;
}

export function rotateLeft(direction: Direction) {
  if (isFacingNorth(direction)) {
    return Direction.W;
  } else if (isFacingSouth(direction)) {
    return Direction.E;
  } else if (isFacingWest(direction)) {
    return Direction.S;
  } else {
    return Direction.N;
  }
}

export function rotateRight(direction: Direction) {
  if (isFacingNorth(direction)) {
    return Direction.E;
  } else if (isFacingSouth(direction)) {
    return Direction.W;
  } else if (isFacingWest(direction)) {
    return Direction.N;
  } else {
    return Direction.S;
  }
}
