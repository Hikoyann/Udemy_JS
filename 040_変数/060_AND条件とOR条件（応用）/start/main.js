function hello(name) {
  name = name || 'Tom';
  console.log('Hello ' + name);
}

hello(0)

let name;

name && hello(name);

