// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);  //Green
//     // return str;      //Red
// }

// module.exports = {
//     capitalize: capitalize
// };

const utils = require('./utils.js');
const should = require('should');
const assert = require('assert');

describe('utils.js모듈의 capitalize() 함수는', () => {
    it('문자열의 첫번째 문자를 대문자로 반환한다', ()=>{
        const result = utils.capitalize('hello');
        //assert.equal(result, 'Hello'); //아래와 같이 should 구문을 써서 가독성을 높일 수 있다(should는 영문법 같이 보여 해석이 용이하다)
        result.should.be.equal('Hello');
    })
})