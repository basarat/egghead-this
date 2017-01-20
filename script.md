Here I have a simple function foo, which logs `this` to the console

```
function foo() {
  console.log(this);
}
foo();
```
If I go ahead and call this function from the root of the file you can see that it is actually the nodejs global variable. I can prove this by simply checking if this is equal to global and it is.

```
function foo() {
  console.log({
    'global?': this === global,
  });
}
foo();
```

Now if I go ahead and create a bar variable, and add foo as member to bar, and call `bar.foo` you can see that this will now point to bar
```
function foo() {
  console.log({
    'global?': this === global,
    'bar?': this === bar,
  });
}
foo();

const bar = { foo };
bar.foo();
```

Ad because it changes its meaning based on how the function is called, it is quite commonly called as the *calling context*.

```
function foo() {
  console.log({
    'global?': this === global,
    'bar?': this === bar,
  });
}

const bar = { foo };
bar.foo(); // bar 
foo(); // global
```

