// let a = (1 + 2) * 3;
// console.log(a);

a = 0;
// let b = ++a;
let b;
// a = b = 1;
// console.log(a, b);
a = (b = a) + 1;
console.log(a, b);

function fn() {
  let a = 0;
  return a++;
}
console.log(!(fn() * 5));
