'use strict'

// normal 
async function f_normal() {
    return 1;
};

f_normal()
    .then((result) => {
        console.log(result);
    });

// Promise
async function f_promise() {
    return Promise.resolve(1);
}

f_promise()
    .then((result) => {
        console.log(`Promise : ${result}`);
    });


// promise
const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('promise : I did something'), 3000)
    })
}

const doSomething = async () => {
    console.log(await doSomethingAsync())
}

console.log('promise : Before')
doSomething()
console.log('promise : After')


// third 
const aFunction = async () => {
    return 'third test'
}

aFunction()
.then((e) => {
    console.log(e);
})
