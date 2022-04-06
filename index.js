const {performance} = require('perf_hooks');
const nemo = ['nemo',"Ali", "Chris Rock", "Nemo"];
const largeArray = new Array(10000000).fill("Nemo")


function findNemo(array) {

  let t0 = performance.now();

  for(let i = 0; i < array.length; i++) {
    if(array[i] ===  'nemo') {
      console.log('Nemo found!');
    }
  }

  let t1 = performance.now();
  console.log(`Time to find nemo is ${t1-t0}`);
}

findNemo(largeArray);
console.log(largeArray);