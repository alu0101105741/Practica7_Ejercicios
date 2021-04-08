interface LIFOInterface<T> {
  push(newElement: T): void;
  pop(): T;
  pseek(): T;
  size(): number;
}

/**
 * Class that implement a LIFO with a generic interface
 */
export class LIFO<T> implements LIFOInterface<T> implements Iterable<T> {
  private values: Map<number, T>;
  private index: number = 1;

  /**
   * Constructor function of the LIFO class
   * @param {T} values Values given to the constructor to initialice the class
   */
  constructor(values: T[]) {
    this.values = new Map<number, T>();
    values.forEach((value) => this.push(value));
  }

  /**
   * Push function of the LIFO class
   * @param {T} newElement Element given to add into the LIFO class
   */
  push(newElement: T) {
    this.values.set(this.index, newElement);
    this.index = this.index + 1;
  }

  /**
   * Pop function of the LIFO class
   * @return {T} Value of the last element,
   * the one that is remove from the class
   */
  pop(): T {
    const dummy: T = this.values.get(this.index - 1);
    this.values.delete(this.index - 1);
    this.index = this.index - 1;
    return dummy;
  }

  /**
   * Pseek function of the LIFO class
   * @return {T} Value of the last element,
   * in this case this value is not remove from the class
   */
  pseek(): T {
    return this.values.get(this.index - 1);
  }

  /**
   * Size function of the LIFO class
   * @return {number} Number of elements inside the class
   */
  size(): number {
    return this.values.size;
  }

  /**
   * Making our function iterable
   * @return {Iterator<T>} asd
   */
  [Symbol.iterator](): Iterator<T> {
    return this.values.values();
  }

  /**
   * Print function of the LIFO class
   */
  print(): string {
    this.values.forEach((element) => element.print());
  }
}
