import 'mocha';
import {expect} from 'chai';
import {LIFO} from '../src/ejercicio';

describe('Exercise from practice 7', () => {
  const LIFOTest = new LIFO<number>([1, 2, 3]);
  it('Push method working', () => {
    expect(LIFOTest.push(4));
  });
  it('Pop method working', () => {
    expect(LIFOTest.pop()).to.equal(4);
  });
  it('Pseek method working', () => {
    expect(LIFOTest.pseek()).to.equal(3);
  });
  it('Size method working', () => {
    expect(LIFOTest.size()).to.equal(3);
  });
  it('Print method working', () => {
    expect(LIFOTest.print()).to.equal('1,2,3');
  });
});
