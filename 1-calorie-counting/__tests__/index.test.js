const { calorieCounting } = require('../index')


describe("calorieCounting",() => {
    test("returns with a value that isn't undefined -- successfully reads file", async () => {
        // arrange
        
        // act
        const result = await calorieCounting();
        
        // assert
        expect(result).not.toBe(undefined)
    })
})