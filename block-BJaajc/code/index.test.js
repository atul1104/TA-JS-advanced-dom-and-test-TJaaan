const getFullName = require('./getFullName');

test('adds fn + ln to equal fullName', () => {
  expect(getFullName('Atul', 'Waghamare')).toBe('Atul Waghamare');
});

// const add = require('./add');

// test('adds 4 + 2 to equal 6', () => {
//   expect(add(4, 2)).toBe(6);
// });
