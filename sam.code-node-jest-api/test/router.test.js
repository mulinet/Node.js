'use strict';
const Controller = require('../controller');

const getSpy = jest.fn();

jest.doMock('express', () => {
    return {
        Router() {
            return {
                get: getSpy,
            };
        }
    };
});

describe('should test router', () => {

    test('should test get posts', () => {
        require('../router');
        expect(getSpy).toHaveBeenCalledWith('/posts', Controller.getPosts);
    });
});