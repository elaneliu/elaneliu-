//->��ab��������
var a=10,
      b=20;
var c=a;
a=b;
b=c;

//->��ef��������
var e=10,
      f=20;
e=e+f;
f=e-f;
e=e-f;

//->��gh��������
//ES6�еĽṹ��ֵ
var g=10,
      h=20;
[g,h]=[h,g];

console.log(a,b,e,f,g,h);