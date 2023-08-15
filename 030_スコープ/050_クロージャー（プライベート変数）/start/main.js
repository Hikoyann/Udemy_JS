function incrementFactory() {

  let num = 0;

  // num = num + 1;
  // console.log(num);
  function increment() {
      num = num + 1;
      console.log(num);
  }

  return increment;
}


const increment = incrementFactory();

increment();
increment();
increment();
increment();