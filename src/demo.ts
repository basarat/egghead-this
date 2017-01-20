function foo() {
  console.log(this === module);
}
foo(); 