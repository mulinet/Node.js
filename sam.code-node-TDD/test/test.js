var assert = require("assert"); //nodejs에서 제공하는 aseert 모듈

describe('Array 테스트', function() {
	describe('indexOf() 메서드', function () {
		it('값이 없을 때에는 -1 을 리턴함', function () {
			assert.equal(-1, [1,2,3].indexOf(5));
			assert.equal(-1, [1,2,3].indexOf(0));
		});
	});
})


describe('utils.js모듈의 capitalize() 함수는', () => {
    it('문자열의 첫번째 문자를 대문자로 반환한다', ()=>{
        const result = utils.capitalize('hello');
        assert.equal(result, 'Hello');
    })
})

describe('비동기 코드 테스트', function () {
	describe('#setTimeout', function () {
		it('2초 이내에 완료되지 않으면 실패', function (done) {
			setTimeout(function () {
				done();
			}, 3000);
		});
	});
});

describe('다양한 hooks 방법', function() {

	before(function() {
		// 이 블록 내의 테스트들을 실행하기에 앞서 한번 실행되는 부분
	});

	after(function() {
		// 이 블록 내의 테스트들을 모두 실행한 후에 한번 실행되는 부분
	});

	beforeEach(function() {
		// 이 블록 내의 각 테스트들이 실행되기 전에 실행
	});

	afterEach(function() {
		// 이 블록 내의 각 테스트들이 실행된 후에 실행
	});

	// test cases
});