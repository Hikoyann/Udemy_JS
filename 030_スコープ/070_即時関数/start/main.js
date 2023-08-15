function a() {
  console.log('called');
}

a();

(function() {
  console.log('called');
})()

let c = (function(d) {

  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log('privateFn is called');
  }
  function publicFn() {
    console.log("publicFn is called" + privateVal++);
  }
  console.log('called' + d);

  return {
    publicVal,
    publicFn
  };
})(100)

c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();
// c.privatefn();

console.log(c);

let b = function() {
  console.log('called');
}();