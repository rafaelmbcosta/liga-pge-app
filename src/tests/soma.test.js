import soma from '../somaTestExample'

test("deve somar", () => {
  const result = soma(2, 2);
  expect(result).toEqual(4);
})