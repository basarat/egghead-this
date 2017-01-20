Here I have a simple function foo, which logs `this` to the console

```
function foo() {
  console.log(this);
}
foo();
```
If I go ahead and call this function from the root of the file you can see that this actually points to the nodejs global variable. I can prove this by simply checking if this is equal to global and it is.

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

const bar = { foo };
bar.foo();
```

This is because for simple functions in JavaScript and TypeScirpt the value of `this` changes based on how the function is called.

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

That is why there is a compiler option called noImplicitThis and as soon as you set that to true, such unsafe usages of `this` immediately becomes errors. And if you still want the unsafe behavior you are free to annotate this as any for a particular function and you can see that the errors go away.