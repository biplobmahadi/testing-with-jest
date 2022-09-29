const {sum, multiple} = require('../src/main')

test('Test sum func', () => {
    expect(sum(3, 4)).toBe(7)
})

test('Test multiple func', () => {
    expect(multiple(3, 4)).toBe(12)
})