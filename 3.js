//->让ab交换数据
var a=10,
      b=20;
var c=a;
a=b;
b=c;

//->让ef交换数据
var e=10,
      f=20;
e=e+f;
f=e-f;
e=e-f;

//->让gh交换数据
//ES6中的结构赋值
var g=10,
      h=20;
[g,h]=[h,g];

console.log(a,b,e,f,g,h);