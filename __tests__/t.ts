import t from '../src/controllers/t'

test('2 mais 2', () => {
    expect(t(2,2)).toBe(4);
})