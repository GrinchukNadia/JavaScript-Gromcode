let memory = 0
export function add(number) {
  memory += number;
  return memory;
}

export function decrease(number) {
  memory -= number;
  return memory;
}

export function reset() {
  memory = 0;
  return memory;
}

export function getMemo() {
  return memory
}

