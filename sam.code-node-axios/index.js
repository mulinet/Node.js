'use strict'
const axios = require('axios');


axios.get('https://reqres.in/api/users?page=2').then((Response)=>{
    console.log(Response.data);
}).catch((Error)=>{
    console.log(Error);
}).then(function() {
    console.log('get always');
});

axios.post('https://reqres.in/api/users', {
    "name": "morpheus",
    "job": "leader"
})
.then(function (response) {
     console.log(response);
}).catch(function (error) {
    console.log(error);
}).then(function() {
    console.log('post always');
});

axios.put('https://reqres.in/api/users/2', {
    "name": "morpheus",
    "job": "zion resident"
})
.then(function (response) {
    console.log(response);
}).catch(function (error) {
   console.log(error);
}).then(function() {
   console.log('put always');
});

axios.delete('https://reqres.in/api/users/2')
  .then(function (response) {
    console.log(response);
}).catch(function (error) {
   console.log(error);
}).then(function() {
   console.log('delete always');
});