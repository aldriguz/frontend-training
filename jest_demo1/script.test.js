const googleSearch = require('./script');

const dbMock = [
    'dog.com',
    'flowers.com',
    'disney.com',
    'doggy.com'
]


describe('googleSearch', () => {

    it('this is a silly test', () => {
        expect('noo').toBe('noo');
    });
    
    
    it('searching in google', () => {
        expect(googleSearch('cat', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'doggy.com']);
    });
    
    it('work with undefnied', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    })
    
    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);    
    })
    
});
