function f(n) { g(n-1) }
function g(n) {
  print("before: " + g.arguments[0]);
  if(n>0)
    f(n);
  print("after: " + g.arguments[0]);
}
f(2)