// import { add } from './App';


const add = jest.fn(() => 3);

// console.log(add(1,2));

//unit test
test('add', () => {
  expect(add(1,2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1,2);

  // expect(add(5,2)).toBe(7);
});

// //integration test
// test('total', () => {
//   expect(total(5, 20)).toBe('$25');
// });

