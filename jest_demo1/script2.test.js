const fetch = require('node-fetch');
const swapi = require('./script2');

it('call swapi to get people star wars', (done) => {
    expect.assertions(1);
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(82);
        done();
    })
});

it('call swapi to get people star wars with a promise', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(82);
        expect(data.results.length).toBeGreaterThan(5);
    })
});



it('get people count and results', () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 89,
            results: [0,1,2,3,4,5]
        })
    }));

    /**
     * Review mocks and spies
     */
    expect.assertions(4)
    return swapi.getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
        expect(data.count).toBe(89);
        expect(data.results.length).toBeGreaterThan(5);
    })
})