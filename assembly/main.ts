import "allocator/arena";
export { memory };

import { context, storage, near } from "./near";
import { Greeter } from "./model.near";
// --- contract code goes below

export function hello(): string {
  let greeter = new Greeter("Hello");
  return greeter.greet("world");
}