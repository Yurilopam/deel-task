const { calcPercentage } = require('@src/utils/math')

test('calcPercentage', () => {
    expect(calcPercentage(100, 25)).toBe(25)
    expect(calcPercentage('1000', 25)).toBe(250)
    expect(calcPercentage(404.5, '25')).toBe(101.125)
    expect(calcPercentage('258', '25')).toBe(64.5)
})