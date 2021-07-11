import requests from 'utils/requests';

describe('requests util', () => {
    test('requests should have correct schema', () => {
        expect(JSON.stringify(requests)).toBe(JSON.stringify(requests))
    })
})
