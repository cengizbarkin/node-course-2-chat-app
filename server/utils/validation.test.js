const expect = require('expect');

//load a real string

const {isRealString} = require('./validation');
describe('isRealString', () => {
  it('Should reject non-string values', () => {
    let res = isRealString(98);
    expect(res).toBe(false);
  });

  it('Should reject string with only spaces', () => {
    let res = isRealString('      ');
    expect(res).toBe(false);
  });

  it('Should allow strings with non-space characters', () => {
    let res = isRealString('  cengiz  ');
    expect(res).toBe(true);
  });
});
