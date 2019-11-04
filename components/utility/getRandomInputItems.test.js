import getRandomInputItems from './getRandomInputItems'

describe('getRandomInputItems', () => {
  it('it should return an array', () => {
    expect(Array.isArray(getRandomInputItems(2, 'test'))).toBeTruthy()
  })
})
