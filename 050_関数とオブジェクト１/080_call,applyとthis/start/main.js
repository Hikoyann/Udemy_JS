function a(name, name1) {
    console.log('hello ' + name + ' ' + name1);
}

const tim = {name: 'kim'}

const b = a.bind(tim);

b();

a.apply(tim, ['tim', 'bob']);
a.call(tim, 'Tim','Bob');

const arry = [1,2,3,4,5];

// const result = Math.max.apply(null, arry);
const result = Math.max(null, ...arry);
console.log(result);

