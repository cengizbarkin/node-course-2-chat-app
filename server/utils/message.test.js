let expect = require('expect');
let {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('Should generate correct message object', () => {});
  let from = 'Cengiz';
  let text = 'Some message';
  let message = generateMessage(from, text);

  expect(message.createdAt).toBeA('number');
  expect(message).toInclude({from, text});
});
