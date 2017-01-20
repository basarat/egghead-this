function foo() {
  console.log(this === global);
}
foo();