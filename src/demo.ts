function foo(this: any) {
  console.log({
    'global?': this === global,
    'bar?': this === bar
  });
}

const bar = { foo };
bar.foo(); // bar 
foo(); // global