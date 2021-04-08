interface LIFOInterface<T> {
  push(newElement: T): void;
  pop(): T;
  pseek(): T;
  size(): number;
}

/**
 * asd
 */
export class LIFO<T> implements LIFOInterface<T> {
  private values: T[];

  /**
   * asd
   * @param {T} values asd
   */
  constructor(values: T[]) {
    this.values = values;
  }

  /**
   * asd
   * @param {T} newElement asd
   */
  push(newElement: T) {
    this.values.push(newElement);
  }

  /**
   * asd
   * @return {T} asd
   */
  pop(): T {
    return this.values.pop();
  }

  /**
   * asd
   * @return {T} asd
   */
  pseek(): T {
    return this.values[this.values.length - 1];
  }

  /**
   * asd
   * @return {number} asd
   */
  size(): number {
    return this.values.length;
  }

  /**
   * asd
   * @return {string} asd
   */
  print(): string {
    return this.values.toString();
  }
}
